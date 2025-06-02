import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

export default function Exercise() {

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/home");
        }, 2000);
        
        return () => clearTimeout(timer);
    }, []);

    return(
        <View style={styles.container}>
            <Text style={{fontSize: 30, fontWeight: 500, color: '#fff', width: 280, textAlign: 'center', lineHeight: 30}}>Gerando exercícios.</Text>
            <Text style={{fontSize: 18, color: '#fff', width: 320, textAlign: 'center'}}>
                Aguarde um momento. Assim que estiver pronto,  seu filho poderá executar os exercícios.
            </Text>

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
