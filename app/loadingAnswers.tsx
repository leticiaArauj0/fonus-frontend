import { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function LoadingAnswers() {
  const { answers } = useLocalSearchParams();

    function analisarRespostas(respostas: string[]): "2-3" | "4-5" | "6-7" {
        const score = respostas.filter(r => r === "Sim").length;
        const total = respostas.length;
        const ratio = score / total;
  
        if (ratio <= 0.4) return "2-3";
        if (ratio <= 0.75) return "4-5";
        
        return "6-7";
  }
  

  useEffect(() => {
    const parsed = JSON.parse(answers as string) as string[];
    const faixaEtaria = analisarRespostas(parsed);

    setTimeout(() => {
      router.push({
        pathname: "/report",
        params: { faixa: faixaEtaria }
      });
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recebendo as respostas.</Text>
      <Text style={styles.subtext}>Aguarde um momento.</Text>
      <ActivityIndicator size="large" color="#fff" />
    </View>
  );
}

function getFaixaEtaria(idade: number): string | null {
    if (idade >= 2 && idade <= 3) return "2-3";
    if (idade >= 4 && idade <= 5) return "4-5";
    if (idade >= 6 && idade <= 7) return "6-7";
    return null;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 50,
        backgroundColor: "#47065B",
    },
    title: {
        fontSize: 30,
        fontWeight: "500",
        color: "#fff",
        width: 280,
        textAlign: "center",
        lineHeight: 30,
    },
    subtext: {
        fontSize: 18,
        color: "#fff",
    },
});
