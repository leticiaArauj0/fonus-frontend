import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router"

export default function forgotPassword() {
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 40, width: 320, color: '#47065B', textAlign: 'center', fontWeight: 600}}>Esqueci minha senha</Text>
            <Text style={{fontSize: 16}}>Por favor, digite seu e-mail:</Text>

            <View>
                <Text>E-MAIL</Text>
                <TextInput style={styles.input} placeholder="Digite seu e-mail" />
            </View>

            <Link href='/code' asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={{fontSize: 16, fontWeight: '700', color: '#fff'}}>Enviar código</Text>
                </TouchableOpacity>  
            </Link>
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
        gap: 30,
    },

    input: {
        height: 50,
        width: 320,

        backgroundColor: '#C6C6C6',
        
        borderWidth: 1,
        borderColor: '#47065B',
        borderRadius: 20,

        marginBottom: 10,
        paddingLeft: 20,

        fontSize: 16,
    },

    button: {
        height: 50,
        width: 320,

        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: '#47065B',
        borderRadius: 20,
    },
})
