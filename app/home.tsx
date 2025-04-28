import ExerciseCard from "@/components/exerciseCard";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import { StyleSheet, View } from "react-native";

export default function Home() {
    return(
        <View style={styles.container}>
            <Header />
            
            <View style={{gap: 16}}>
                <ExerciseCard title="Exercício 1" description="Olá, esse é um exercício de..."/>
                <ExerciseCard title="Exercício 2" description="Olá, esse é um exercício de..."/>
                <ExerciseCard title="Exercício 3" description="Olá, esse é um exercício de..."/>
                <ExerciseCard title="Exercício 4" description="Olá, esse é um exercício de..."/>
            </View> 

            <Navbar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',

        alignItems: 'center',

        backgroundColor: '#47065B',
        paddingVertical: 30
    },

    image: {
        height: 50,
        width: 50,

        borderRadius: 50,
    }
})
