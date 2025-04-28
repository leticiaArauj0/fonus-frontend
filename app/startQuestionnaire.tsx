import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router"

export default function startQuestionnaire() {
    return(
        <View style={styles.container}>
            <Text style={{color: "#fff", width: 300, fontSize: 21, fontWeight: 700, textAlign: 'center', lineHeight: 30}}>Responda o questionário a seguir sobre seu filho,  para finalizarmos.</Text>

            <Link href='/form' asChild>
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
        gap: 140,

        backgroundColor: '#47065B',
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
