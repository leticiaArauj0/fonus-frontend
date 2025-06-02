import ExerciseCard from "@/components/exerciseCard";
import Header from "../components/header";
import Navbar from "../components/navbar";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from "react";
import { useAuth } from "@/auth/AuthContext";
import exercises from '@/assets/exercises.json'
import { useLocalSearchParams } from "expo-router";

const faseData = [
    {label: 'Fase 1', value: 1},
    {label: 'Fase 2', value: 2},
    {label: 'Fase 3', value: 3}
]

type ItemType = {
    label: string;
    value: string;
}

export default function Home() {
    const { user } = useAuth()

    const [selectedCondition, setSelectedCondition] = useState<string | null>(
        user?.conditions ? user.conditions[0] : null
    )
    const [selectedLevel, setSelectedLevel] = useState<number>(1)

    const shouldShowConditionDropdown = user?.conditions && user.conditions.length > 0

    const conditionOptions = (user?.conditions || []).map(condition => ({
        label: condition,
        value: condition
    }));


    const filteredExercises = exercises.filter(ex => {
        if (user?.ageGroup) {
            return ex.condition.includes(user.ageGroup) && ex.level === selectedLevel;
        }
        return (
            (!selectedCondition || ex.condition === selectedCondition) &&
            (!selectedLevel || ex.level === selectedLevel)
        )
    })

    const _renderItem = (item: ItemType) => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
            </View>
        );
    };

    return(
        <View style={styles.container}>
            <Header />

            <View style={styles.containerFilter}>
                {shouldShowConditionDropdown && (
                    <Dropdown
                        style={styles.dropdown}
                        data={conditionOptions}
                        labelField="label"
                        valueField="value"
                        placeholder="Selecione a condição"
                        value={selectedCondition}
                        onChange={item => setSelectedCondition(item.value)}
                        renderItem={item => _renderItem(item)}
                    />
                )}
                <Dropdown
                    style={[styles.dropdown, {width: 120}]}
                    data={faseData}
                    labelField="label"
                    valueField="value"
                    value={selectedLevel}
                    onChange={item => setSelectedLevel(item.value)}
                    renderItem={item => _renderItem(item)}
                />
            </View>           
            
            <ScrollView style={{maxHeight: '70%'}}>
                {filteredExercises.map((ex, idx) => (
                    <ExerciseCard
                        key={idx}
                        title={ex.title}
                        description={ex.description}
                        lessons={ex.lessons}
                    />
                ))}
                {filteredExercises.length === 0 && (
                    <Text style={{ color: '#fff', textAlign: 'center', marginTop: 20 }}>
                        Nenhum exercício encontrado.
                    </Text>
                )}
            </ScrollView> 

            <Navbar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',

        alignItems: 'center',

        backgroundColor: '#47065B',
        paddingTop: 30
    },

    image: {
        height: 50,
        width: 50,

        borderRadius: 50,
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

    containerFilter: {
        flexDirection: 'row',
        width: 360,
        gap: 10
    },

    dropdown: {
        height: 50,
        width: 230,

        backgroundColor: '#fff',

        borderColor: '#fab220',
        borderWidth: 1,
        borderRadius: 50,

        marginTop: 5,
        marginBottom: 20,
        paddingHorizontal: 20
    },
})
