import Header from "@/components/header";
import { ArrowRight, Microphone } from "phosphor-react-native";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Audio } from 'expo-av';
import { useEffect, useState } from "react";
import * as FileSystem from 'expo-file-system';
import { Recording } from "expo-av/build/Audio";
import ArrowBack from "@/components/arrowBack";
import { useRouter } from "expo-router";

const imageMap: Record<string, any> = {
    "bola": require('@/assets/images/exercise/bola.jpeg'),
    "gato": require('@/assets/images/exercise/gato.jpg'),
    "casa": require('@/assets/images/exercise/casa.jpg'),
    "peixe": require('@/assets/images/exercise/peixe.jpg'),
    "trem": require('@/assets/images/exercise/trem.jpg'),
    "dragao": require('@/assets/images/exercise/dragao.jpg'),
    "escada": require('@/assets/images/exercise/escada.png'),
    "pato": require('@/assets/images/exercise/pato.jpg'),
    "mamae": require('@/assets/images/exercise/mamae.png'),
    "papai": require('@/assets/images/exercise/papai.jpg'),
    "vaca": require('@/assets/images/exercise/vaca.jpg'),
    "sofa": require('@/assets/images/exercise/sofa.jpg'),
    "trator": require('@/assets/images/exercise/trator.png'),
    "transito": require('@/assets/images/exercise/transito.jpg'),
    "drama": require('@/assets/images/exercise/drama.jpg'),
    "dracula": require('@/assets/images/exercise/dracula.jpg'),
    "escudo": require('@/assets/images/exercise/escudo.png'),
    "escova": require('@/assets/images/exercise/escova.png'),
    "pedro": require('@/assets/images/exercise/pedro.jpg'),
    "correu": require('@/assets/images/exercise/correu.jpeg'),
    "boi": require('@/assets/images/exercise/boi.jpg'),
    "banana": require('@/assets/images/exercise/banana.png'),
    "morango": require('@/assets/images/exercise/morango.jpg'),
    "uva": require('@/assets/images/exercise/uva.jpg'),
    "carro": require('@/assets/images/exercise/carro.png'),
    "garfo": require('@/assets/images/exercise/garfo.jpg'),
    "brasil": require('@/assets/images/exercise/brasil.jpg'),
    "brisa": require('@/assets/images/exercise/brisa.jpg'),
    "brinco": require('@/assets/images/exercise/brinco.jpg'),
    "creme": require('@/assets/images/exercise/creme.jpeg'),
    "crianca": require('@/assets/images/exercise/crianca.png'),
    "criativo": require('@/assets/images/exercise/criatividade.jpeg'),
  }

interface Lesson {
  number: number;
  imageUrl: string;
  phonetic: string;
  type: string;
}

interface ExerciceProps {
  currentLesson: Lesson;
  allLessons: Lesson[];
  onComplete: (attempts: number) => void;
  title: string;
  currentIndex: number;
  updateLessonState: (index: number, attempts: number) => void;
  getAttemptsForLesson?: (index: number) => number;
}

export default function Exercise(props: ExerciceProps) {
    const { number, imageUrl, phonetic } = props.currentLesson;
    const [message, setMessage] = useState<string>('');
    const [recording, setRecording] = useState<Recording | null>(null);
    const [isRecording, setIsRecording] = useState<boolean>(false);
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    const [attempts, setAttempts] = useState(0);
    const expected = phonetic;
    const router = useRouter();

    useEffect(() => {
      setAttempts(0);
      setIsCorrect(false);
      setMessage('');
    }, [props.currentLesson]);

    const handleNextLesson = () => {
      props.updateLessonState(props.currentIndex, attempts);
      
      if (props.currentIndex < props.allLessons.length - 1) {
        props.onComplete(attempts);
      } else {
        const totalAttempts = props.allLessons.reduce(
          (total, _, idx) => total + (props.getAttemptsForLesson?.(idx) || 0),
          0
        );
        
        router.push({
          pathname: '/exerciseDone',
          params: {
            attempts: totalAttempts.toString(),
            exerciseTitle: props.title,
          }
        });
      }
    };

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

    return (
        <View style={styles.container}>
            <ArrowBack color="#fff"/>
            <Header />

            <View style={{ width: '100%', alignItems: 'center', gap: 20 }}>
                <View style={{gap: 40, width: '100%', alignItems: 'center'}}>
                    <Text style={{color: '#fff', fontSize: 22, fontWeight: 800}}>LIÇÃO {number}</Text>
                    <Text style={{color: '#c6c6c6', fontSize: 20, fontWeight: 800}}>Ouça e repita</Text>
                </View>
                <Text style={{fontSize: 18, fontWeight: 600, color: isCorrect ? "#99b83c" : "#ff3131", textAlign: 'center'}}>
                  {message}
                </Text>
                <View style={styles.containerImage}>
                    <Image 
                      style={styles.image} 
                      resizeMode="contain" source={imageMap[imageUrl]} 
                    />
                </View>

                <View style={styles.containerPhonetics}>
                    <Text style={{ fontSize: 22, fontWeight: '700', color: '#000', textTransform: 'uppercase', textAlign: 'center'}}>
                      {phonetic}
                    </Text>
                </View>
            </View>

            <View style={{ gap: 30, alignItems: 'center', marginTop: 60}}>
                <TouchableOpacity 
                  onPress={startRecording}
                  disabled={isRecording}
                >
                    <Microphone size={40} weight="fill" color={isRecording ? "#00DE00" : "#fff"} />
                </TouchableOpacity>

                {isCorrect && (
                    <TouchableOpacity 
                      style={styles.button}
                      onPress={handleNextLesson}
                    >
                        <ArrowRight size={40} color="#fff" />
                    </TouchableOpacity>
                )}
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
        height: 55,
        width: 205,
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
