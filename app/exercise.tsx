import Header from "@/components/header";
import { ArrowRight, Microphone } from "phosphor-react-native";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Audio } from 'expo-av';
import { useEffect, useState } from "react";
import * as FileSystem from 'expo-file-system';
import { Recording } from "expo-av/build/Audio";
import ArrowBack from "@/components/arrowBack";
import { Link, useLocalSearchParams, useRouter } from "expo-router";

const imageMap: Record<string, any> = {
    "bola": require('@/assets/images/exercise/bola.jpeg'),
    "gato": require('@/assets/images/exercise/gato.jpg'),
    "casa": require('@/assets/images/exercise/casa.jpg'),
    "peixe": require('@/assets/images/exercise/peixe.jpg'),
    "trem": require('@/assets/images/exercise/trem.jpg'),
    "dragao": require('@/assets/images/exercise/dragao.jpg'),
    "escada": require('@/assets/images/exercise/escada.png')
}

interface Lesson {
  number: number;
  imgUrl: string;
  phonetic: string;
  type: string;
}

interface ExerciceProps {
  currentLesson: Lesson;
  allLessons: Lesson[];
  onComplete: () => void;
  title: string;
}

export default function Exercise(props: ExerciceProps) {
    const { currentLesson: paramLesson, allLessons: paramLessons } = useLocalSearchParams();
    
    const currentLesson = paramLesson ? JSON.parse(paramLesson as string) : props.currentLesson;
    const allLessons = paramLessons ? JSON.parse(paramLessons as string) : props.allLessons;
    
    const { number, imgUrl, phonetic } = currentLesson;
    
    const [message, setMessage] = useState<string>('')
    const [recording, setRecording] = useState<Recording | null>(null);
    const [isRecording, setIsRecording] = useState<boolean>(false);
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    const [attempts, setAttempts] = useState(0);
    const expected = phonetic

    const router = useRouter();
    
    async function startRecording() {
        try {
            if (isRecording) return;
            setIsRecording(true);

            const permission = await Audio.requestPermissionsAsync();
            if (!permission.granted) return;

            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });

            const { recording } = await Audio.Recording.createAsync(
                Audio.RecordingOptionsPresets.HIGH_QUALITY
            );

            setRecording(recording);

            setTimeout(async () => {
                try {
                    await stopRecording(recording);
                } catch (err) {
                    console.error("Erro ao parar gravação:", err);
                } finally {
                    setIsRecording(false);
                }
            }, 3000);
        } catch (err) {
            console.error("Erro ao gravar:", err);
        }
    }

    async function stopRecording(rec: Recording) {
        try {
          await rec.stopAndUnloadAsync();
          const uri = rec.getURI();
      
          setRecording(null);
      
          if (uri) {
            const newUri = FileSystem.documentDirectory + `audio-${Date.now()}.m4a`;
            await FileSystem.copyAsync({
              from: uri,
              to: newUri
            });
      
            await uploadAudio(newUri, expected);
          } else {
            console.error('Erro: URI da gravação é null.');
          }
        } catch (err) {
          console.error("Erro ao parar gravação:", err);
          throw err;
        }
    }

    async function uploadAudio(uri: string, expected: string) {
        const formData = new FormData();

        setAttempts(prev => prev + 1);
      
        formData.append('audio', {
          uri,
          name: 'audio.m4a',
          type: 'audio/m4a',
        } as any);
      
        formData.append('expected', expected);
      
        try {
          const response = await fetch('https://fonus-backend.onrender.com/analyze-deepgram', {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            body: formData,
          });
      
          const data = await response.json();
      
          if (!response.ok) {
            console.error('Erro do servidor:', data);
            return;
          }
      
          console.log('Resposta do servidor:', data);
      
          if (data.isCorrect) {
            setMessage('Pronúncia correta!');
            setIsCorrect(true)
          } else {
            setMessage(`Pronúncia incorreta. Você disse: "${data.result}". Tente novamente.`);
            setIsCorrect(false)
          }
      
        } catch (error) {
          console.error('Erro ao enviar áudio:', error);
        }
    }

    const handleNextLesson = () => {
        const currentIndex = allLessons.findIndex((lesson: { number: any; }) => lesson.number === number);
        const nextLesson = allLessons[currentIndex + 1];
        
        if (nextLesson) {
            router.replace({
                pathname: '/exercise',
                params: {
                    currentLesson: JSON.stringify(nextLesson),
                    allLessons: JSON.stringify(allLessons),
                }
            });
        } else {
            router.push({
                pathname: '/exerciseDone',
                params: {
                    attempts: attempts.toString(),
                    exerciseTitle: props.title,
                }
            });
        }
    };  

    console.log(props.title)

    return (
        <View style={styles.container}>
            <ArrowBack color="#fff"/>
            <Header />

            <View style={{ width: '100%', alignItems: 'center', gap: 20 }}>
                <View style={{gap: 40, width: '100%', alignItems: 'center'}}>
                    <Text style={{color: '#fff', fontSize: 22, fontWeight: 800}}>LIÇÃO {number}</Text>
                    <Text style={{color: '#c6c6c6', fontSize: 20, fontWeight: 800}}>Ouça e repita</Text>
                </View>
                <Text style={{fontSize: 18, fontWeight: 600, color: isCorrect ? "#99b83c" : "#ff3131", textAlign: 'center'}}>{message}</Text>
                <View style={styles.containerImage}>
                    <Image style={styles.image} resizeMode="contain" source={imageMap[imgUrl]} />
                </View>

                <View style={styles.containerPhonetics}>
                    <Text style={{ fontSize: 22, fontWeight: '700', color: '#000', textTransform: 'uppercase'}}>{phonetic}</Text>
                </View>
            </View>

            <View style={{ gap: 30, alignItems: 'center', marginTop: 60}}>
                <TouchableOpacity 
                  onPress={startRecording}
                  disabled={isRecording}
                >
                    <Microphone size={40} weight="fill" color={isRecording ? "#00DE00" : "#fff"} />
                </TouchableOpacity>

                {isCorrect ? 
                    <TouchableOpacity 
                      style={styles.button}
                      onPress={() => handleNextLesson()}
                    >
                        <ArrowRight size={40} color="#fff" />
                    </TouchableOpacity>
                : 
                null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#47065B',
        paddingTop: 30,
        paddingHorizontal: 30
    },
    containerImage: {
        width: '100%',
        height: 260,
        backgroundColor: '#fff',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    containerPhonetics: {
        height: 50,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20
    },
    button: {
        width: 200,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderColor: '#fff',
        borderWidth: 1
    },
    image: {
        height: '100%',
        width: '100%'
    }
})
