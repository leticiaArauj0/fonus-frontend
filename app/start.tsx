import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function StartScreen() {
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 32, fontWeight: 700, color: '#fff'}}>Vamos começar!!!</Text>

            <Text style={{fontSize: 18, color: '#fff', width: 300, lineHeight: 30, textAlign: 'center'}}>
                Precisamos fazer algumas perguntas sobre seu filho para assim podermos  selecionar os exercícios certos.
            </Text>

            <Link href='/childInfo' asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={{fontSize: 16, fontWeight: '700', color: '#47065B'}}>Avançar</Text>
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
        alignItems: 'center',
        gap: 100,

        backgroundColor: '#47065B'
    },

    button: {
        height: 50,
        width: 220,

        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: '#fff',
        borderRadius: 20,
    }
})
