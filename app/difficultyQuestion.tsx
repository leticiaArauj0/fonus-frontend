import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router"
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from "react";

const dataDifficulty = [
    {label: 'Dificuldade 1', value: 'Dificuldade 1'},
    {label: 'Dificuldade 2', value: 'Dificuldade 2'},
];

const dataConditions = [
    {label: 'Codição 1', value: 'Codição 1'},
    {label: 'Codição 2', value: 'Codição 2'},
];

type ItemType = {
    label: string;
    value: string;
};

export default function difficultyQuestion() {
    const [dropdown, setDropdown] = useState(null);
    const [dropdown2, setDropdown2] = useState(null);
    const [selected, setSelected] = useState<string[]>([]);
    
    const _renderItem = (item: ItemType) => {
        return (
        <View style={styles.item}>
            <Text style={styles.textItem}>{item.label}</Text>
        </View>
        );
    };

    return(
        <View style={styles.container}>
            <Text style={{textAlign: 'center', color: '#47065B', fontSize: 40, fontWeight: 600, width: 320}}>Para prosseguirmos</Text>

            <View>
                <Text style={{textAlign: 'center', color: '#47065B', fontSize: 16, width: 320, marginBottom: 10}}>Selecione as dificuldades do seu filho:</Text>

                <Dropdown
                    style={styles.dropdown}
                    data={dataDifficulty}
                    labelField="label"
                    valueField="value"
                    placeholder="Selecione as dificuldades"
                    value={dropdown}
                    onChange={item => {
                    setDropdown(item.value);
                    console.log('selected', item);
                    }}
                    renderItem={item => _renderItem(item)}
                />
            </View>

            <View>
                <Text style={{textAlign: 'center', color: '#47065B', fontSize: 16, width: 320, marginBottom: 10}}>Agora, selecione se ele possuir alguma dessas condições </Text>

                <Dropdown
                    style={styles.dropdown}
                    data={dataConditions}
                    labelField="label"
                    valueField="value"
                    placeholder="Selecione as condições"
                    value={dropdown2}
                    onChange={item => {
                    setDropdown2(item.value);
                    console.log('selected', item);
                    }}
                    renderItem={item => _renderItem(item)}
                />
            </View>

            <Link href='/startQuestionnaire' asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={{fontSize: 16, fontWeight: 700, color: '#fff'}}>Avançar</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',

        backgroundColor: '#FFF',

        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,
    },

    dropdown: {
        height: 50,
        width: 320,

        backgroundColor: '#C6C6C6',

        borderColor: '#47065B',
        borderWidth: 1,
        borderRadius: 20,

        marginTop: 5,
        marginBottom: 20,
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
    }
})
