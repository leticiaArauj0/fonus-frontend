import Header from "@/components/header";
import { ArrowRight, Microphone } from "phosphor-react-native";
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { Audio } from 'expo-av';
import { useState } from "react";
import { Recording } from "expo-av/build/Audio";

export default function Exercise() {
    const [recording, setRecording] = useState<Recording | null>(null);
    const expected = 'a'

    async function startRecording() {
        try {
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

            setTimeout(() => stopRecording(recording), 5000);
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
                await uploadAudio(uri, expected);
            } else {
                console.error('Erro: URI da gravação é null.');
            }
        } catch (err) {
            console.error("Erro ao parar gravação:", err);
        }
    }

    async function uploadAudio(uri: string, expected: string) {
        const formData = new FormData();
      
        formData.append('audio', {
          uri,
          name: 'audio.m4a',
          type: 'audio/m4a',
        } as any);
      
        formData.append('expected', expected);
      
        try {
          const response = await fetch('http://localhost:3000/analyze', {
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
            alert('Pronúncia correta!');
          } else {
            alert(`Pronúncia incorreta. Você disse: "${data.result}"`);
          }
      
        } catch (error) {
          console.error('Erro ao enviar áudio:', error);
        }
    }      

    return (
        <View style={styles.container}>
            <Header arrow={'./home'} />

            <View style={{ width: '100%', alignItems: 'center', gap: 20 }}>
                <View style={styles.containerImage}></View>

                <View style={styles.containerPhonetics}>
                    <Text style={{ fontSize: 22, fontWeight: '700', color: '#000' }}>A</Text>
                </View>
            </View>

            <View style={{ gap: 30, alignItems: 'center' }}>
                <TouchableOpacity onPress={startRecording}>
                    <Microphone size={40} weight="fill" color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <ArrowRight size={40} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        gap: 100,
        backgroundColor: '#47065B',
        paddingTop: 30,
        paddingHorizontal: 30
    },
    containerImage: {
        width: '100%',
        height: 260,
        backgroundColor: '#fff',
        borderRadius: 20
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
    }
});
