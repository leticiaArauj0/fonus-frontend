import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link, router } from "expo-router"

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

                <Link href='/startQuestionnaire' asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{fontSize: 16, fontWeight: '700', color: '#47065B'}}>Não</Text>
                    </TouchableOpacity>
                </Link>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => {
                    router.push({
                        pathname: '/difficultyQuestion',
                        params: { nextScreen: '/formY' }
                    });
                    }}
                >
                    <Text style={{fontSize: 15, fontWeight: '700', color: '#47065B', textAlign: 'center', paddingHorizontal: 30}}>Começou, mas não terminou o tratamento</Text>
                </TouchableOpacity>
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
