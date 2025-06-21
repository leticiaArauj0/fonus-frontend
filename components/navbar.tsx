import { ChartLineUp, ChatCenteredDots, Gear, House, User } from 'phosphor-react-native'
import { View, Text, StyleSheet } from "react-native";

export default function Navbar() {
    return(
        <View style={styles.contaiter}>
            <Gear color='#47065B' size={30} />
            <Text style={styles.bar}>|</Text>
            <ChartLineUp color='#47065B' size={30} />
            <Text style={styles.bar}>|</Text>
            <House color='#47065B' size={30} weight="fill" />
            <Text style={styles.bar}>|</Text>
            <ChatCenteredDots color='#47065B' size={30} weight="fill" />
            <Text style={styles.bar}>|</Text>
            <User color='#47065B' size={30} weight="fill" />
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
        
        position: 'absolute',
        bottom: 20
    },

    bar: {
        color: '#47065B',
        fontWeight: 600,
        fontSize: 24
    }
})
