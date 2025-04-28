import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Link } from "expo-router"

export default function WelcomeScreen() {
    return(
        <View style={styles.container}>
            <View>
                <Text style={{fontSize: 22, color: '#fff', }}>Bem vindo ao</Text>
                <Text style={{fontSize: 42, fontWeight: 700, color: '#A425C4'}}>FONUS</Text>
            </View>

            <Image style={styles.image} source={require('../assets/images/logo.png')}/>
              
            <Text style={{width: 275, textAlign: 'center', fontSize: 17, color: '#fff', lineHeight: 30}}>
                Espaço onde a saúde e o bem-estar da comunicação são prioridades para alcançar sua melhor versão.
            </Text>

            <Link href='/begin' asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={{color: '#fff', fontSize: 16}}>Avançar</Text>
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
        gap: 60,

        backgroundColor: '#47065B'
    },

    image: {
        height: 220,
        width: 200
    },

    button: {
        height: 50,
        width: 320,

        justifyContent: 'center',
        alignItems: 'center',
        
        borderColor: '#fff',
        borderWidth: 2,

        borderRadius: 28,
    }
})
