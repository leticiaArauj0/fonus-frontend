import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router"

export default function ConsultationQuestion() {
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 21, fontWeight: 700, color: '#fff', width: 320, textAlign: 'center', lineHeight: 34}}>O paciente já foi consultado por um fonoaudiologo?</Text>

            <View style={{gap: 26}}>
                <Link href='/difficultyQuestion' asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{fontSize: 16, fontWeight: '700', color: '#47065B'}}>Sim</Text>
                    </TouchableOpacity>
                </Link>

                <Link href='/difficultyQuestion' asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{fontSize: 16, fontWeight: '700', color: '#47065B'}}>Não</Text>
                    </TouchableOpacity>
                </Link>

                <Link href='/difficultyQuestion' asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{fontSize: 15, fontWeight: '700', color: '#47065B', textAlign: 'center', paddingHorizontal: 30}}>Começou, mas não terminou o tratamento</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',

        justifyContent: 'center',
        alignItems: 'center',
        gap: 80,

        backgroundColor: '#47065B',
    },

    button: {
        height: 50,
        width: 240,

        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: '#fff',
        borderRadius: 20,
    }
})
