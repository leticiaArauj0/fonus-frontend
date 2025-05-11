import ExerciseCard from "@/components/exerciseCard";
import Header from "../components/header";
import Navbar from "../components/navbar";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from "react";
import { useAuth } from "@/auth/AuthContext";

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
    const [dropdown, setDropdown] = useState(null);
    const [selectedFase, setSelectedFase] = useState('');
    const [selectedConditions, setSelectedConditions] = useState('');
    const { user } = useAuth()

    const conditionOptions = (user?.conditions || []).map(condition => ({
        label: condition,
        value: condition
    }));

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
                <Dropdown
                    style={styles.dropdown}
                    data={conditionOptions}
                    labelField="label"
                    valueField="value"
                    placeholder={user?.conditions ? user?.conditions[0] : "Condição 1"}
                    value={dropdown}
                    onChange={item => {
                    setDropdown(item.value);
                        console.log('selected', item);
                    }}
                    renderItem={item => _renderItem(item)}
                />
                <Dropdown
                    style={[styles.dropdown, {width: 120}]}
                    data={faseData}
                    labelField="label"
                    valueField="value"
                    placeholder="Fase 1"
                    value={dropdown}
                    onChange={item => {
                    setDropdown(item.value);
                        console.log('selected', item);
                    }}
                    renderItem={item => _renderItem(item)}
                />
            </View>           
            
            <ScrollView style={{maxHeight: '70%'}}>
                <ExerciseCard title="Exercício 1" description="Olá, esse é um exercício de..."/>
                <ExerciseCard title="Exercício 2" description="Olá, esse é um exercício de..."/>
                <ExerciseCard title="Exercício 3" description="Olá, esse é um exercício de..."/>
                <ExerciseCard title="Exercício 4" description="Olá, esse é um exercício de..."/>
                <ExerciseCard title="Exercício 4" description="Olá, esse é um exercício de..."/>
                <ExerciseCard title="Exercício 4" description="Olá, esse é um exercício de..."/>
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
