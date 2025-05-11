import ArrowBack from "@/components/arrowBack";
import { Link } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Code() {
    return(
        <View style={styles.container}>
            <ArrowBack color="#47065B"/>

            <Text style={{fontSize: 36, color: '#47065B', textAlign: "center"}}>Digite o código de verificação</Text>
            <View style={{flexDirection: 'row', gap: 10}}>
                <TextInput keyboardType="number-pad" style={styles.input} />
                <TextInput keyboardType="number-pad" style={styles.input} />
                <TextInput keyboardType="number-pad" style={styles.input} />
                <TextInput keyboardType="number-pad" style={styles.input} />
            </View>

            <Link href="/rightCode" asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={{fontSize: 16, fontWeight: '700', color: '#fff'}}>Reenviar código</Text>
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

    input: {
        height: 70,
        width: 70,

        backgroundColor: '#C6C6C6',
        
        borderWidth: 1,
        borderColor: '#47065B',
        borderRadius: 20,

        marginBottom: 10,
        paddingLeft: 20,

        fontSize: 26,
    },

    button: {
        height: 50,
        width: 320,

        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: '#47065B',
        borderRadius: 20,
    },
})
