import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";

export default function Report() {
    const { height } = Dimensions.get('window');

    return (
        <View style={styles.container}>
            <View style={[styles.scrollWrapper, { height: height * 0.8 }]}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.card}>
                        <Text style={styles.title}>Relatório:</Text>
                        <Text style={{color: '#47065B', fontSize: 16, textAlign: 'center'}}>Desenvolvimento de uma criança de 7 anos</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.title}>Audição</Text>
                        <Text style={styles.text}>
                            A audição infantil desempenha um papel crucial no desenvolvimento da linguagem, comunicação e aprendizado. Desde o nascimento, os bebês começam a captar sons ao seu redor, incluindo vozes e ruídos do ambiente. Qualquer alteração auditiva nessa fase pode impactar o desenvolvimento da fala e habilidades sociais.
                        </Text>
                        <TouchableOpacity style={styles.buttonMore}>
                            <Text style={{color: '#47065b', fontWeight: 600}}>Saiba mais</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.title}>Expressões</Text>
                        <Text style={styles.text}>
                            A expressão infantil refere-se à forma como as crianças comunicam sentimentos, pensamentos e necessidades, seja por meio da fala, gestos, expressões faciais ou desenhos. Desde cedo, os bebês começam a se expressar através do choro, sorrisos e vocalizações. Com o crescimento, o vocabulário se expande e a comunicação verbal se torna mais complexa.
                        </Text>
                        <TouchableOpacity style={styles.buttonMore}>
                            <Text>Saiba mais</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.title}>Fala</Text>
                        <Text style={styles.text}>
                            A fala infantil é um dos principais marcos do desenvolvimento da comunicação e envolve a habilidade de articular sons, palavras e frases para se expressar. O processo começa com balbucios nos primeiros meses, evoluindo para palavras simples por volta de um ano e frases mais complexas entre os dois e três anos. O ritmo desse desenvolvimento pode variar, mas dificuldades na pronúncia, fluência ou formação de frases podem indicar a necessidade de avaliação fonoaudiológica. A interação social, leitura e estímulo verbal em casa são fundamentais para o desenvolvimento saudável da fala.
                        </Text>
                    </View>
                </ScrollView>
            </View>

            <Link href='\loadingExercise' asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Gerar exercícios</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#FFF',
        alignItems: 'center',
        gap: 20
    },

    scrollWrapper: {
        width: '100%',
    },

    scrollContent: {
        alignItems: 'center',
        gap: 10,
    },

    card: {
        width: 320,
        padding: 16,
        borderRadius: 10,
        borderColor: '#47065B',
        borderWidth: 1.5,
    },

    title: {
        color: '#47065B',
        fontSize: 20,
        fontWeight: 700,
        textAlign: 'center',
        marginBottom: 10
    },

    text: {
        fontSize: 14.5,
        color: '#7d7e7f',
        textAlign: 'justify',
        lineHeight: 20
    },

    button: {
        height: 50,
        width: 320,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#47065B',
        borderRadius: 20,
    },

    buttonText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff',
    },

    buttonMore: {
        height: 36,
        width: 150,

        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        
        borderRadius: 20,
        borderColor: '#fab220',
        borderWidth: 2,

        marginTop: 10
    }
});
