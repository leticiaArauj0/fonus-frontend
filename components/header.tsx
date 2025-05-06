import { Link, RelativePathString } from "expo-router";
import { CaretLeft } from "phosphor-react-native";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

interface HeaderProps {
    arrow: RelativePathString,
}

export default function Header({ arrow }: HeaderProps) {
    return(
        <View style={styles.container}>
            <Link href={arrow} asChild>
                <TouchableOpacity>
                    <CaretLeft color="#fff" size={32} />
                </TouchableOpacity>
            </Link>
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
