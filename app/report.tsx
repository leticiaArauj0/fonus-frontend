import { useLocalSearchParams, Link, useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import { relatorios } from "@/assets/report";
import { useAuth } from "@/auth/AuthContext";

export default function Report() {
  const { faixa } = useLocalSearchParams() as { faixa: "2-3" | "4-5" | "6-7" };
  const { updateAgeGroup } = useAuth()
  const relatorio = relatorios[faixa];

  if (!relatorio) return <Text>Faixa não encontrada.</Text>;

  const { height } = Dimensions.get("window");

  const router = useRouter()

  const handleSelectAgeGroup = async (ageGroup: '2-3' | '4-5' | '6-7') => {
    await updateAgeGroup(ageGroup);
    router.push('/loadingExercise');
  };

  return (
    <View style={styles.container}>
      <View style={[styles.scrollWrapper, { height: height * 0.8 }]}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.card}>
            <Text style={styles.title}>{relatorio.faixa}</Text>
            <Text style={styles.text}>{relatorio.resumo}</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.title}>Audição</Text>
            <Text style={styles.text}>{relatorio.audicao}</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.title}>Fala</Text>
            <Text style={styles.text}>{relatorio.fala}</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.title}>Expressão Verbal</Text>
            <Text style={styles.text}>{relatorio.expressaoVerbal}</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.title}>Expressão Não Verbal</Text>
            <Text style={styles.text}>{relatorio.expressaoNaoVerbal}</Text>
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => handleSelectAgeGroup(faixa)}
      >
        <Text style={styles.buttonText}>Gerar exercícios</Text>
      </TouchableOpacity>
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
