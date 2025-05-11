import { Link } from "expo-router";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Header() {
    return(
        <View style={styles.container}>
            <Link href='./perfil' asChild>
                <TouchableOpacity>
                    <Image style={styles.image} source={require('../assets/images/perfil.jpg')} />
                </TouchableOpacity>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 340, 
        height: 50,
 
        justifyContent: 'flex-end', 
        flexDirection: 'row',
        alignItems: 'center',

        marginBottom: 30
    },

    image: {
        height: 50,
        width: 50,

        borderRadius: 50,
    }
})
