import ArrowBack from "@/components/arrowBack";
import { StyleSheet, View, Image, Text } from "react-native";
import { useAuth } from "../auth/AuthContext";
import { Clock, Envelope, InstagramLogo, ListNumbers, User } from "phosphor-react-native";

export default function Perfil() {
    const { user } = useAuth();

    return(
        <View style={styles.container}>
            <ArrowBack color="#47065B" />

            <View style={styles.containerPerfil}>
                <Image style={styles.image} source={require('../assets/images/perfil.jpg')} />

                <View>
                    <Text style={styles.name}>{user?.childName}</Text>
                    <Text style={{fontSize: 14, fontWeight: '600'}}>Paciente</Text>
                </View>
            </View>

            <View style={{gap: 30}}>
                <View>
                    <Text style={styles.title}>Sobre mim</Text>

                    <View style={styles.containerInfo}>
                        <User size={32} />
                        <Text style={styles.text}>{user?.childName}</Text>
                    </View>
                    <View style={styles.line}></View>

                    <View style={styles.containerInfo}>
                        <ListNumbers size={32} />
                        <Text style={styles.text}>{user?.childAge}</Text>
                    </View> 
                    <View style={styles.line}></View>                  

                    <View style={styles.containerInfo}>
                        <Clock size={32} />
                        <Text style={styles.text}>Sessões: 2 vezes na semana</Text>
                    </View>
                    <View style={styles.line}></View>  
                </View>

                <View>
                    <Text style={styles.title}>Sobre o responsável</Text>

                    <View style={styles.containerInfo}>
                        <User size={32} />
                        <Text style={styles.text}>{user?.name}</Text>
                    </View>
                    <View style={styles.line}></View>  

                    <View style={styles.containerInfo}>
                        <Envelope size={32} />
                        <Text style={styles.text}>{user?.email}</Text>
                    </View>
                    <View style={styles.line}></View>  
                </View>

                <View>
                    <Text style={styles.title}>Informações sobre o app</Text>

                    <View style={{gap: 10}}>
                        <View style={styles.containerInfo}>
                            <Envelope size={32} />
                            <Text style={styles.text}>fonus@fmm.org.br</Text>
                        </View>
                        <View style={styles.containerInfo}>
                            <InstagramLogo size={32} />
                            <Text style={styles.text}>Projeto_Fonus</Text>
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

        backgroundColor: '#FFF',

        gap: 30,
        paddingHorizontal: 50,
        paddingTop: 80
    },

    containerPerfil: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16
    },

    image: {
        height: 70,
        width: 70,

        borderRadius: 50,
    },

    name: {
        color: '#47065B',
        fontSize: 24,
        fontWeight: '700'
    },

    title: {
        color: '#47065B',
        fontSize: 18,
        fontWeight: '800',
        paddingBottom: 10
    },

    containerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },

    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#000',
        marginTop: 5,
        marginBottom: 10
    },

    text: {
        fontSize: 16,
        fontWeight: '600'
    }
})
