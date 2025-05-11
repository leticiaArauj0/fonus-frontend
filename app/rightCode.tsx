import { Link } from "expo-router";
import { View,Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function rightCode() {
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 40, fontWeight: 600, width: 300, textAlign: 'center', color: '#47065B'}}>Código confirmado</Text>
            <Image style={styles.image} source={require('../assets/images/correct.png')}/>
            <Link href='\login' asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={{fontSize: 18, fontWeight: 700, color: '#fff'}}>Continuar</Text>
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
        gap: 50,
    },

    image: {
        height: 120,
        width: 120
    },

    button: {
        height: 50,
        width: 320,

        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: '#47065B',
        borderRadius: 20,
    }
})
