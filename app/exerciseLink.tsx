import Header from "@/components/header";
import { View, Text, StyleSheet } from "react-native";
import ArrowBack from "@/components/arrowBack";

interface ExerciceLinkProps {
    number: number,
}

export default function ExerciseLink({number}: ExerciceLinkProps) {
    return (
        <View style={styles.container}>
            <ArrowBack color="#fff"/>
            <Header />

            <View style={{ width: '100%', alignItems: 'center', gap: 40 }}>
                <Text style={{color: '#fff', fontSize: 22, fontWeight: 800}}>LIÇÃO {number}</Text>
                <Text style={{color: '#c6c6c6', fontSize: 20, fontWeight: 800,  textAlign: 'center', width: '90%'}}>
                    Associe as vogais com suas palavras correspondentes
                </Text>
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                    <View style={{gap: 20}}>
                        <View style={styles.button}>
                            <Text style={styles.text}>a</Text>
                        </View>
                        <View style={styles.button}>
                            <Text style={styles.text}>e</Text>
                        </View>
                        <View style={styles.button}>
                            <Text style={styles.text}>i</Text>
                        </View>
                        <View style={styles.button}>
                            <Text style={styles.text}>o</Text>
                        </View>
                        <View style={styles.button}>
                            <Text style={styles.text}>u</Text>
                        </View>
                    </View>
                    <View style={{gap: 20}}>
                        <View style={styles.button}>
                            <Text style={styles.text}>Elefante</Text>
                        </View>
                        <View style={styles.button}>
                            <Text style={styles.text}>Ovo</Text>
                        </View>
                        <View style={styles.button}>
                            <Text style={styles.text}>Urubu</Text>
                        </View>
                        <View style={styles.button}>
                            <Text style={styles.text}>Indígena</Text>
                        </View>
                        <View style={styles.button}>
                            <Text style={styles.text}>Abelha</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#47065B',
        paddingTop: 30,
        paddingHorizontal: 30
    },
    button: {
        height: 54,
        width: 120,

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#fff',
        borderRadius: 10
    },
    text: {
        textTransform: 'uppercase',
        fontSize: 20,
        fontWeight: 600
    }
})
