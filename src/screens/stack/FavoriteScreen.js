import {FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import {globalStyles} from "../../assets/globalStyles";
import NavigationButtons from "../../components/NavigationButtons";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BAlert from "../../components/bootstrap/BAlert";
import BButton from "../../components/bootstrap/BButton";

export default function FavoriteScreen({navigation}) {
    const STORAGE_KEY = '@items';
    const [items, setItems] = useState([]);
    const [editId, setEditId] = useState(null);
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonNumber, setPokemonNumber] = useState('');
    const [erro, setErro] = useState('');

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const stored = await AsyncStorage.getItem('@items');
            if (stored) setItems(JSON.parse(stored));
        } catch (e) {
            console.error('Erro ao carregar dados', e);
        }
    };

    const saveData = async (newItems) => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
        } catch (e) {
            console.error('Erro ao salvar', e);
        }
    };

    const handleAdd = async () => {
        const validarForm = (pokemonName, pokemonNumber) => {
            if (!pokemonName.trim()) {
                setErro('Digite como você irá chamar este pokémon!');
                return false;
            }
            if (!pokemonNumber.trim()) {
                setErro('Digite o número do pokémon!');
                return false;
            }

            setErro('');
            return true;
        };

        if (!validarForm(pokemonName, pokemonNumber)) {
            console.log('Formulário inválido');
            return;
        }

        let newList = [];
        if (editId) {
            newList = items.map((i) =>
                i.id === editId ? {...i, number: pokemonNumber, name: pokemonName} : i
            );
            setEditId(null);
        } else {
            const newItem = {id: Date.now().toString(), number: pokemonNumber, name: pokemonName};
            newList = [...items, newItem];
        }

        setItems(newList);
        await saveData(newList);
        setPokemonName('');
        setPokemonNumber('');
    };

    const handleEdit = (item) => {
        console.log(item)
        setEditId(item.id);
        setPokemonName(item.name);
        setPokemonNumber(item.number);
    };

    const handleDelete = async (id) => {
        const newList = items.filter((i) => i.id !== id);
        setItems(newList);
        await saveData(newList);
    };

    return <>

                <View style={[globalStyles.container]}>
                    <NavigationButtons navigation={navigation}/>
                    <Text style={globalStyles.title}>Pokémons Favoritos</Text>
                    <View style={globalStyles.formRow}>
                        <Text class={globalStyles.formLabel}>Nome:</Text>
                        <TextInput
                            style={globalStyles.formInput}
                            placeholder="Nome do pokémon"
                            value={pokemonName}
                            onChangeText={setPokemonName}
                        />

                        <Text class={globalStyles.formLabel}>Número:</Text>
                        <TextInput
                            inputMode="numeric"
                            keyboardType="numeric"
                            style={globalStyles.formInput}
                            placeholder="# Número do pokémon"
                            value={pokemonNumber}
                            onChangeText={setPokemonNumber}
                        />

                        {editId ? <TouchableOpacity><BButton type="primary" onPress={handleAdd}>
                            Salvar
                        </BButton></TouchableOpacity> : null}

                        {editId ? null : <TouchableOpacity><BButton type="success" onPress={handleAdd}>
                            Adicionar
                        </BButton></TouchableOpacity>}
                    </View>

                    {erro ? <BAlert type="danger">{erro}</BAlert> : null}

                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (
                            <View style={styles.item}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Image
                                        source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${item.number}.png`}}
                                        style={styles.sprite}/>
                                    <Image
                                        source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${item.number}.png`}}
                                        style={styles.sprite}/>
                                </View>
                                <Text
                                    style={styles.itemText}>{`#${String(item.number).padStart(3, '0')} — ${capitalize(item.name)}`}</Text>
                                <View style={styles.buttons}>
                                    {editId === item.id ? null :
                                        <TouchableOpacity><BButton type="primary" onPress={() => handleEdit(item)}>
                                            Editar
                                        </BButton></TouchableOpacity>}

                                    {editId === item.id ? null :
                                        <TouchableOpacity><BButton type="danger" onPress={() => handleDelete(item.id)}>
                                            Deletar
                                        </BButton></TouchableOpacity>}
                                </View>
                            </View>
                        )}
                        contentContainerStyle={styles.listContent}
                        ListEmptyComponent={
                            <BAlert type="warning">
                                <Text>Nenhum Pokémon Favorito</Text>
                            </BAlert>
                        }
                    />
                </View>

    </>
}

function capitalize(str = '') {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        backgroundColor: '#f7f7f8',
    },
    title: {fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20},
    inputContainer: {flexDirection: 'row', gap: 10, marginBottom: 15},
    input: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    listContent: {
        paddingBottom: 24,
        width: '100%',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 1,
    },
    itemText: {fontSize: 18},
    buttons: {flexDirection: 'row', gap: 15},
    edit: {fontSize: 18},
    delete: {fontSize: 18},
    clearBtn: {
        marginTop: 20,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#e53935',
        borderRadius: 8,
    },
    clearText: {color: '#fff', fontWeight: 'bold'},


    alertDanger: {
        backgroundColor: '#f8d7da', // bg-danger
        borderColor: '#f5c6cb',     // border-danger
        borderWidth: 1,
        padding: 12,
        borderRadius: 6,
        marginVertical: 8,
    },
    textAlertDanger: {
        color: '#721c24', // text-danger
        fontSize: 15,
    },
    sprite: {
        width: 64,
        height: 64,
        marginRight: 12,
    },
});
