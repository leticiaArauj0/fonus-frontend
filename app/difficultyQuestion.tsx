import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router"
import { MultiSelect } from 'react-native-element-dropdown';
import { useState } from "react";
import { useAuth } from "@/auth/AuthContext";
import axios from "axios";

const dataDifficulty = [
    { label: 'Gagueira', value: 'Gagueira' },
    { label: 'Troca de letras', value: 'Troca de letras' },
    { label: 'Dificuldade de se expressar', value: 'Dificuldade de se expressar' },
    { label: 'Fala rápida', value: 'Fala rápida' },
    { label: 'Dificuldade de articulação oral', value: 'Dificuldade de articulação oral' },
    { label: 'Atrasado linguístico', value: 'Atrasado linguístico' },
    { label: 'Difícil entendimento das palavras', value: 'Difícil entendimento das palavras' },
];

const dataConditions = [
    { label: 'Atraso na Aquisição da Linguagem (AAL)', value: 'Atraso na Aquisição da Linguagem (AAL)' },
    { label: 'Hipernasalidade', value: 'Hipernasalidade' },
    { label: 'Distúrbio Fonológico', value: 'Distúrbio Fonológico' },
    { label: 'Apraxia de Fala na Infância (AFI)', value: 'Apraxia de Fala na Infância (AFI)' },
    { label: 'Dislexia', value: 'Dislexia' },
    { label: 'Transtorno do Espectro Autista (TEA)', value: 'Transtorno do Espectro Autista (TEA)' },
    { label: 'Hipotonia Orofacial', value: 'Hipotonia Orofacial' },
    { label: 'Gagueira Infantil (Disfluência)', value: 'Gagueira Infantil (Disfluência)' },
];

type ItemType = {
    label: string;
    value: string;
};

export default function DifficultyQuestion() {
    const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
    const [selectedConditions, setSelectedConditions] = useState<string[]>([]);

    const params = useLocalSearchParams();
    const nextScreen = params.nextScreen as string | undefined;

    const _renderItem = (item: ItemType, selected: boolean | undefined) => (
        <View style={styles.item}>
            <Text style={[styles.textItem, selected && styles.selectedText]}>{item.label}</Text>
        </View>
    );

    const { user, updateUserConditions } = useAuth()
    const router = useRouter()

    const handleSubmit = async () => {
        try {
            const response = await axios.put("https://fonus-backend.onrender.com/update-conditions", {
                email: user?.email,
                conditions: selectedConditions,
            });
    
            console.log("Condições atualizadas com sucesso:", response.data);

            if(response.status === 200) {
                updateUserConditions(selectedConditions);
                if (nextScreen) {
                    router.push(nextScreen);
                } else {
                    router.push('/loadingExercise')
                }       
            }
        } catch (error: any) {
            if (error.response) {
                console.error("Erro do servidor:", error.response.status, error.response.data);
            } else if (error.request) {
                console.error("Sem resposta do servidor:", error.request);
            } else {
                console.error("Erro ao configurar a requisição:", error.message);
            }
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Para prosseguirmos</Text>

            <View>
                <Text style={styles.label}>Selecione as dificuldades do seu filho:</Text>

                <ScrollView style={styles.selectedContainer}>
                    <MultiSelect
                        style={styles.dropdown}
                        data={dataDifficulty}
                        labelField="label"
                        valueField="value"
                        placeholder="Selecione as dificuldades"
                        value={selectedDifficulties}
                        onChange={setSelectedDifficulties}
                        renderItem={(item, selected) => _renderItem(item, selected)}
                        selectedStyle={styles.selectedStyle}
                    />
                </ScrollView>
            </View>

            <View>
                <Text style={styles.label}>Agora, selecione se ele possuir alguma dessas condições:</Text>

                <ScrollView style={styles.selectedContainer}>
                    <MultiSelect
                        style={styles.dropdown}
                        data={dataConditions}
                        labelField="label"
                        valueField="value"
                        placeholder="Selecione as condições"
                        value={selectedConditions}
                        onChange={setSelectedConditions}
                        renderItem={(item, selected) => _renderItem(item, selected)}
                        selectedStyle={styles.selectedStyle}
                    />
                </ScrollView>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Avançar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 50,
    },
    title: {
        textAlign: 'center',
        color: '#47065B',
        fontSize: 40,
        fontWeight: '600',
        width: 320,
        paddingBottom: 40
    },
    label: {
        textAlign: 'center',
        color: '#47065B',
        fontSize: 16,
        width: 320,
        marginVertical: 10
    },
    dropdown: {
        height: 50,
        width: 320,
        backgroundColor: '#C6C6C6',
        borderColor: '#47065B',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 20
    },
    item: {
        paddingVertical: 17,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
    },
    button: {
        height: 50,
        width: 320,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#47065B',
        borderRadius: 20,
        marginTop: 20
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff'
    },
    selectedText: {
        color: '#47065B',
        fontWeight: 'bold',
    },
    selectedStyle: {
        borderRadius: 12,
    },
    selectedContainer: {
        maxHeight: 150,
        overflow: 'scroll',
    },      
});
