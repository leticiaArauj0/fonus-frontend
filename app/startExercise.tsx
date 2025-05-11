import ArrowBack from "@/components/arrowBack";
import { Link } from "expo-router";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function startExercise() {
    return(
        <View style={styles.container}>
            <ArrowBack color="#47065B"/>

            <View style={{gap: 20}}>
                <View style={styles.containerFase}>
                    <Text style={{fontSize: 16, fontWeight: '700', color: '#000'}}>Fase 1</Text>
                </View>
                <View style={styles.containerExercise}>
                    <Image style={styles.image} source={require('../assets/images/exercise.jpg')}/>
                    <View style={{gap: 8}}>
                        <Text style={{fontSize: 16.5, color: '#47065B', fontWeight: '700'}}>Exercício 1</Text>
                        <Text style={{width: '24%', fontSize: 12.5, lineHeight: 18, color: '#7d7e7f'}}>
                            Olá,  esse é um exercício de articulação das vogais, para aprimorar a clareza na fala. As atividades podem incluir cantigas, rimas e  jogos de repetição.
                        </Text>
                    </View>
                </View>
            </View>
            <Link href='/exercise' asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={{fontSize: 16, color: '#fff', fontWeight: '700'}}>Começar</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',

        justifyContent: 'center',
        gap: 120,

        backgroundColor: '#fff',
        paddingHorizontal: 30
    },

    containerFase: {
        height: 36,
        width: 140,

        justifyContent: 'center',
        alignItems: 'center',
        
        borderColor: '#fab220', 
        borderWidth: 1, 
        borderRadius: 50
    },

    containerExercise: {
        height: 200,

        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,

        borderColor: '#47065B',
        borderWidth: 2,
        borderRadius: 20,
        
        paddingHorizontal: 10
    },

    image: {
        height: 120,
        width: 120,

        borderRadius: 5
    },

    button: {
        height: 50,
        width: 320,

        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        
        backgroundColor: '#47065B',
        borderRadius: 20,
    },
})
