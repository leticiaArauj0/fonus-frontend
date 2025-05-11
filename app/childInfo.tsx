import { useAuth } from "@/auth/AuthContext"
import { useRouter } from "expo-router"
import { useState } from "react"
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native"
import { Dropdown } from 'react-native-element-dropdown'

const data = [
    {label: 'Feminino', value: 'feminino'},
    {label: 'Masculino', value: 'masculino'},
]

type ItemType = {
    label: string
    value: string
};

export default function ChildInfo() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [dropdown, setDropdown] = useState(null);

    const [selected, setSelected] = useState<string[]>([])

    const _renderItem = (item: ItemType) => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
            </View>
        )
    }

    const { user } = useAuth();
    const router = useRouter();

    const handleContinue = async () => {
        if (!user?.email) {
            alert("Usuário não autenticado.");
            return;
        }

        try {
            const response = await fetch("http://192.168.0.50:3000/update-child", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: user.email,
                    childName: name,
                    childAge: age,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                router.push("/start");
            } else {
                alert(data.message || "Erro ao atualizar os dados");
            }
        } catch (error) {
            alert("Erro ao conectar com o servidor.");
        }
    };

    return(
        <View style={styles.container}>
            <View>
                <Text style={{fontSize: 20, fontWeight: 700, color: '#47065B', width: 280, textAlign: 'center', lineHeight: 30}}>Digite o nome, idade e o gênero do seu filho </Text>
                <Text style={{marginTop: 10, textAlign: 'center'}}>Ou apelido,  se preferir.</Text>
            </View>

            <View>
                <Text>NOME</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Digite o nome"
                    value={name}
                    onChangeText={setName}
                />

                <Text>IDADE</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Digite a idade"
                    value={age}
                    onChangeText={setAge}    
                />

                <Text>GÊNERO</Text>
                <Dropdown
                    style={styles.dropdown}
                    data={data}
                    labelField="label"
                    valueField="value"
                    placeholder="Selecione gênero"
                    value={dropdown}
                    onChange={item => {
                    setDropdown(item.value);
                        console.log('selected', item);
                    }}
                    renderItem={item => _renderItem(item)}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleContinue}>
                <Text style={{color:'#fff', fontWeight: 700, fontSize: 16}}>Continuar</Text>
            </TouchableOpacity>
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
        gap: 30,
    },

    input: {
        height: 50,
        width: 320,

        backgroundColor: '#C6C6C6',
        
        borderWidth: 1,
        borderColor: '#47065B',
        borderRadius: 20,

        marginBottom: 20,
        marginTop: 5,
        paddingLeft: 20,

        fontSize: 16,
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
    },
});
