import { Link, useLocalSearchParams } from "expo-router";
import { Star } from "phosphor-react-native";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function exerciseDone() {
    const { exerciseTitle, attempts } = useLocalSearchParams();

    return(
        <View style={styles.container}>
            <View style={styles.containerInfo}>
                <View style={{gap: 20, flexDirection: 'row'}}>
                    <Image style={styles.image} source={require('../assets/images/exercise.jpg')} />
                    <View style={{gap: 10}}>
                        <Text style={{fontSize: 20, fontWeight: '700', color: '#47065B'}}>{exerciseTitle}</Text>
                        <View style={{gap: 5, flexDirection: 'row'}}>
                            <Star size={20} weight="fill" color='#ffc30f' />
                            <Star size={20} weight="fill" color='#ffc30f' />
                            <Star size={20} weight="fill" color='#ffc30f' />
                            <Star size={20} weight="fill" color='#ffc30f' />
                            <Star size={20} weight="fill" color='#ffc30f' />
                        </View>
                    </View>
                </View>

                <View>
                    <Text>Número de tarefas: 3</Text>
                    <Text>Número de tentativas: {attempts}</Text>
                    <Text>Número de acertos: 3</Text>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={{color: '#99b83c', fontWeight: '600', fontSize: 16}}>Concluído</Text>
                </TouchableOpacity>
            </View>

            <Link href='/home' asChild>
                <TouchableOpacity style={styles.buttonBack}>
                    <Text style={{color: '#fff', fontSize: 16, fontWeight: '700'}}>Voltar a tela inicial</Text>
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
        gap: 80,

        paddingHorizontal: 24
    },

    containerInfo: {
        width: '100%',

        gap: 20,

        borderColor: '#47065B',
        borderWidth: 2,
        borderRadius: 20,

        padding: 20,
    },

    image: {
        height: 110,
        width: 110,

        borderRadius: 10
    },

    button: {
        height: 40,
        width: 130,

        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

        borderColor: '#99b83c',
        borderWidth: 1,
        borderRadius: 50
    },

    buttonBack: {
        height: 50,
        width: 320,

        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: '#47065B',
        borderRadius: 20,
    }
})
