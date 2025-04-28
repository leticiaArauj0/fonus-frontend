import { Link } from 'expo-router';
import { ChartLineUp, ChatCenteredDots, Gear, House, User } from 'phosphor-react-native'
import { View, Text, StyleSheet } from "react-native";

export default function Navbar() {
    return(
        <View style={styles.contaiter}>
            <Link href=''>
                <Gear color='#47065B' size={30} />
            </Link>
            <Text style={styles.bar}>|</Text>
            <Link href=''>
                <ChartLineUp color='#47065B' size={30} />
            </Link>
            <Text style={styles.bar}>|</Text>
            <Link href=''>
                <House color='#47065B' size={30} weight="fill" />
            </Link>
            <Text style={styles.bar}>|</Text>
            <Link href=''>
                <ChatCenteredDots color='#47065B' size={30} weight="fill" />
            </Link>
            <Text style={styles.bar}>|</Text>
            <Link href=''>
                <User color='#47065B' size={30} weight="fill" />
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    contaiter: {
        height: 54,
        width: 360,

        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 14,

        backgroundColor: '#fff',
        borderRadius: 30,
        marginTop: 70
    },

    bar: {
        color: '#47065B',
        fontWeight: 600,
        fontSize: 24
    }
})
