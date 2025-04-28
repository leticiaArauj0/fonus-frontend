import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet, PanResponder } from "react-native";
import { useState } from "react";
import axios from "axios"
import { useRouter } from "expo-router";

export default function Register() {
    const [name, setName] = useState<string>("")
    const [age, setAge] = useState<string>("")
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const router = useRouter()

    const handleRegister = async () => {
        try {
            const response = await axios.post<{ message: string; user?: any }>(
                "http://192.168.0.42:3000/register",
                { name, age, email, password }
            );
            setMessage(response.data.message);

            if(response.data.user) {
                router.push('/login')
            }
        } catch (error: any) {
            setMessage(error.response?.data?.message || "Erro no cadastro");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 36,color: '#47065B'}}>Criar Conta</Text>

            <View style={{width: 320}}>
                <Text>NOME</Text>
                <TextInput style={styles.input} placeholder="Digite seu nome" onChangeText={setName} />
                <Text>IDADE</Text>
                <TextInput style={styles.input} placeholder="Digite sua idade" onChangeText={setAge} />
                <Text>E-MAIL</Text>
                <TextInput style={styles.input} placeholder="Digite seu email" onChangeText={setEmail} keyboardType="email-address" />
                <Text>SENHA</Text>
                <TextInput style={styles.input} placeholder="Digite sua senha" onChangeText={setPassword} secureTextEntry />
                <Text style={{fontSize: 14, color: '#FF0000'}}>{message}</Text>
            </View>

            <TouchableOpacity style={styles.buttonRegister} onPress={handleRegister}>
                <Text style={{fontSize: 16, fontWeight: '700', color: '#fff'}}>Cadastrar</Text>
            </TouchableOpacity>     
        </View>
    );
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

    buttonRegister: {
        height: 50,
        width: 320,

        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: '#47065B',
        borderRadius: 20,
    },
})
