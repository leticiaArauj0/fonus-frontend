import { Link } from "expo-router";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

interface ExerciseProps {
    title: string,
    description: string,
    image?: string
}

export default function ExerciseCard({ title, description }: ExerciseProps) {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/images/exercise.jpg')} />
            <View style={{gap: 10}}>
                <Text style={styles.title}>{title}</Text>
                <Text>{description}</Text>

                <Link href='/startExercise' asChild>
                    <TouchableOpacity style={styles.buttonStart}>
                        <Text style={{color: '#47065B'}}>Começar</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 130,
        width: 360,

        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,

        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginTop: 16
    },

    image: {
        height: 100,
        width: 100,

        borderRadius: 10
    },

    title: {
        color: '#47065B',
        fontWeight: 700,
        fontSize: 18,
    },

    buttonStart: {
        height: 30,
        width: 100,

        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        
        borderRadius: 20,
        borderColor: '#47065B',
        borderWidth: 1,
    }
})
