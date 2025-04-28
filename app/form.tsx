import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import questionsData from '../assets/questions.json';
import { router } from "expo-router";

const images = [
    require('../assets/images/question1.jpeg'),
    require('../assets/images/question2.jpeg'),
    require('../assets/images/question3.jpeg'),
]


export default function Form() {
    const [index, setIndex] = useState(0)

    const handleNext = () => {
        if (index < questionsData.length - 1) {
          setIndex(index + 1)
        } else {
            router.push('/loadingAnswers')
        }
    }

    const current = questionsData[index]

    return(
        <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 40, color: '#47065B', textAlign: "center", fontWeight: 600, width: 300}}>{current.title}</Text>
                <Text style={{marginTop: 5, marginBottom: 20}}>{current.number}</Text>
                <Text style={{textAlign: 'center', color: '#47065B', fontSize: 18, width: 300}}>{current.question}</Text>
            </View>

            {current.image ? (
                <Image style={styles.image} source={images[current.image-1]} />
            ) : null}

            <View style={{flexDirection: 'row', gap: 30}}>
                <TouchableOpacity style={styles.choise}>
                    <Text style={{color: '#47065B', fontSize: 20, fontWeight: 700}}>Sim</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.choise}>
                    <Text style={{color: '#47065B', fontSize: 18, fontWeight: 700}}>Não</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={{color: '#fff', fontWeight: 700, fontSize: 16}}>Avançar</Text>
            </TouchableOpacity>

           {/*<TouchableOpacity onPress={() => setIndex(prev => Math.max(0, prev - 1))}>
                <Text>Voltar</Text>
            </TouchableOpacity>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',

        backgroundColor: '#FFF',

        justifyContent: 'center',
        alignItems: 'center',
        gap: 60,
    },

    image: {
        height: 200,
        width: 300
    },

    choise: {
        height: 85,
        width: 85,

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#C6C6C6',
        
        borderWidth: 1,
        borderColor: '#47065B',
        borderRadius: 20,
    },

    button: {
        height: 50,
        width: 300,

        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: '#47065B',
        borderRadius: 20,
    }
})
