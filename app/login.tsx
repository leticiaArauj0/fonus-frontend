import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import axios from "axios"
import { useRouter, Link } from "expo-router";
import { useAuth } from "../auth/AuthContext";
import ArrowBack from "@/components/arrowBack";

export default function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const router = useRouter() ;

    const { login } = useAuth();

    const validateFields = () => {
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid = emailRegex.test(trimmedEmail);
        const isPasswordValid = trimmedPassword.length >= 8;
    
        if (!isEmailValid) {
            setMessage("E-mail inválido.");
            return false;
        }
    
        if (!isPasswordValid) {
            setMessage("A senha deve ter no mínimo 8 caracteres.");
            return false;
        }
    
        return true;
    }

    const handleLogin = async () => {
        if (!validateFields()) return

        try {
            const response = await axios.post<{ message: string; user?: { name: string; email: string, childName: string, childAge: string }}>(
                "http://192.168.0.50:3000/login",
                { email, password }
            );

            const user = response.data.user
    
            if (user) {
                login(user);

                if (!user.childName || !user.childAge) {
                    router.push("/childInfo");
                } else {
                    router.push("/start");
                }
              } else {
                setMessage(response.data.message || "Erro no login");
            }
        } catch (error: any) {
            setMessage(error.response?.data?.message || "Erro no login");
        }
    };    

    return (
        <View style={styles.container}>
            <ArrowBack color="#47065B"/>
            <Text style={{fontSize: 36, color: '#47065B'}}>Login</Text>

            <View>
                <Text>E-MAIL</Text>
                <TextInput style={styles.input} placeholder="Digite seu email" keyboardType="email-address" onChangeText={setEmail} />
                <Text>SENHA</Text>
                <TextInput style={styles.input} placeholder="Digite sua Senha" onChangeText={setPassword} secureTextEntry />
                <Text style={{fontSize: 14, color: '#ff0000'}}>{message}</Text>
            </View>

            <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
                <Text style={{fontSize: 16, fontWeight: '700', color: '#fff'}}>Logar</Text>
            </TouchableOpacity> 

            <Link href='/forgotPassword'>
                <Text style={{color: '#004aad'}}>Esqueci minha senha</Text>
            </Link>
        </View>
    );
};

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

    buttonLogin: {
        height: 50,
        width: 320,

        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: '#47065B',
        borderRadius: 20,
    },
})
