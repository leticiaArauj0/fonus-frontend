import { Link } from "expo-router";
import { CaretLeft } from "phosphor-react-native";
import { View, Image, StyleSheet } from "react-native";

export default function Header() {
    return(
        <View style={styles.container}>
            <Link href='\'>
                <CaretLeft color="#fff" size={32} />
            </Link>
            <Image style={styles.image} source={require('../assets/images/perfil.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 340, 
        height: 50,
 
        justifyContent: 'space-between', 
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
