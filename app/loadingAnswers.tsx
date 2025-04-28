import { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Answers() {
    useEffect(() => {
        const timer = setTimeout(() => {
          router.push('/report');
        }, 2000);
    
        return () => clearTimeout(timer);
    }, []);

    return(
        <View style={styles.container}>
            <Text style={{fontSize: 30, fontWeight: 500, color: '#fff', width: 280, textAlign: 'center', lineHeight: 30}}>Recebendo as respostas.</Text>
            <Text style={{fontSize: 18, color: '#fff'}}>Aguarde um momento.</Text>

            <ActivityIndicator size ='large' color='#fff'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',

        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,

        backgroundColor: '#47065B',
    },
})
