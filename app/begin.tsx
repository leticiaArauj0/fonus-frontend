import { View, Text, StyleSheet, TouchableOpacity } from "react-native";  
import { Link } from "expo-router";

export default function Begin() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá!</Text>
            <Text style={styles.text}>Antes de começarmos a consulta:</Text>

            <View style={{gap: 30}}>
                <Link href='/register' asChild>
                    <TouchableOpacity style={styles.buttonRegister}>
                        <Text style={{fontSize: 16, fontWeight: '700', color: '#fff'}}>Não possuo cadastro</Text>
                    </TouchableOpacity>
                </Link>
                <Link href='/login' asChild>
                    <TouchableOpacity style={styles.buttonLogin}>
                        <Text style={{fontSize: 16, fontWeight: '700', color: '#47065B'}}>Sou cadastrado</Text>
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
        gap: 100,

        backgroundColor: '#47065B',
    },

    title: {
        fontSize: 36,
        fontWeight: '700',
        color: '#fff',
    },

    text: {
        width: 220,
        textAlign: 'center',
        lineHeight: 30,
        fontSize: 18,
        color: '#fff'
    },

    buttonRegister: {
        height: 50,
        width: 320,

        justifyContent: 'center',
        alignItems: 'center',
        
        borderColor: '#000',
        borderWidth: 2,

        borderRadius: 20,
    },

    buttonLogin: {
        height: 50,
        width: 320,

        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: '#fff',
        borderRadius: 20,
    },
})
