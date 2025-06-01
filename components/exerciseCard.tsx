import { router } from "expo-router";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

type LessonOucaRepita = {
    type: string;
    number: number;
    imageUrl?: string;
    phonetic?: string;
  };
  
  type LessonAssocie = {
    type: string;
    number: number;
    words: string[];
    vowel: string[];
  };
  
export type Lesson = LessonOucaRepita | LessonAssocie;
  

interface ExerciseProps {
    title: string,
    description: string,
    image?: string,
    lessons: Lesson[]
}

export default function ExerciseCard({ title, description, lessons }: ExerciseProps) {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/images/exercise.jpg')} />
            <View style={{gap: 10}}>
                <Text style={styles.title}>{title}</Text>
                <Text>{description}</Text>

                <TouchableOpacity 
                    style={styles.buttonStart} 
                    onPress={() =>router.push({
                        pathname: "/lessons",
                        params: {
                            lessons: JSON.stringify(lessons),
                            title: title
                        },
                })}>
                    <Text style={{color: '#47065B'}}>Começar</Text>
                </TouchableOpacity>
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
