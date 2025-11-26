import {
    ActivityIndicator,
    FlatList,
    Image,
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import React, {useCallback, useEffect, useState} from "react";
import {globalStyles} from "../../assets/globalStyles";
import BAlert from "../../components/bootstrap/BAlert";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import NavigationButtons from "../../components/NavigationButtons";

export default function ListScreen({navigation}) {
    const [pokemon, setPokemon] = useState([]); // { id, name, image }
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [query, setQuery] = useState('');
    const [selectedGen, setSelectedGen] = useState(1);
    const [selectedId, setSelectedId] = useState();

    const loadGeneration = useCallback(async (gen = 1) => {
        try {
            setLoading(true);

            const res = await fetch(`https://pokeapi.co/api/v2/generation/${gen}/`);
            const json = await res.json();
            const species = json.pokemon_species || [];

            // { id, name }
            const mapped = species
                .map((s) => {
                    const match = s.url.match(/\/pokemon-species\/(\d+)\//);
                    const id = match ? Number(match[1]) : null;
                    return id
                        ? {id, name: s.name}
                        : null;
                })
                .filter(Boolean)
                .sort((a, b) => a.id - b.id);


            setPokemon(mapped);
            setSelectedId(null);
        } catch (err) {
            console.warn(`Erro ao carregar Geração ${gen}:`, err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadGeneration(selectedGen);
    }, [loadGeneration, selectedGen]);

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await loadGeneration(selectedGen);
        setRefreshing(false);
    }, [loadGeneration, selectedGen]);

    const filtered = pokemon.filter((p) =>
        p.name.toLowerCase().includes(query.trim().toLowerCase())
    );

    const renderItem = ({item}) => {
        const isSelected = item.id === selectedId;

        return (
            <TouchableOpacity
                style={[styles.item, isSelected && styles.itemSelected]}
                onPress={() => setSelectedId(item.id)}
            >
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                        source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${item.id}.png`}}
                        style={styles.sprite}/>
                    <Image
                        source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${item.id}.png`}}
                        style={styles.sprite}/>
                </View>
                <View style={styles.info}>
                    <Text style={[styles.name, isSelected && styles.nameSelected]}>
                        {`#${String(item.id).padStart(3, '0')} — ${capitalize(item.name)}`}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    if (loading) {
        return (
            <View style={globalStyles.center}>
                <ActivityIndicator size="large"/>
            </View>
        );
    }

    return (

                <View style={globalStyles.container}>
                    <NavigationButtons navigation={navigation}/>
                    <Text style={globalStyles.title}>Pokémon</Text>
                    <View style={styles.searchWrapper}>
                        <Text style={styles.searchIcon}>🔍</Text>
                        <TextInput
                            placeholder="Buscar por nome..."
                            value={query}
                            onChangeText={setQuery}
                            style={styles.search}
                            autoCapitalize="none"
                            returnKeyType="search"
                            clearButtonMode="while-editing"
                        />
                        {query.length > 0 && (
                            <TouchableOpacity onPress={() => setQuery('')} style={styles.clearBtn}>
                                <Text style={styles.clearText}>✕</Text>
                            </TouchableOpacity>
                        )}
                    </View>

                    <View style={styles.genButtonsWrapper}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={styles.genButtonsScroll}>
                            {Array.from({length: 9}, (_, i) => {
                                const gen = i + 1;
                                const selected = gen === selectedGen;
                                return (
                                    <TouchableOpacity
                                        key={gen}
                                        style={[styles.genBtn, selected && styles.genBtnSelected]}
                                        onPress={() => {
                                            if (gen !== selectedGen) {
                                                setSelectedGen(gen);
                                                setQuery('');
                                            }
                                        }}
                                        accessibilityRole="button"
                                        accessibilityState={{selected}}
                                    >
                                        <Text style={[styles.genBtnText, selected && styles.genBtnTextSelected]}>
                                            G{gen}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </ScrollView>
                    </View>

                    {loading ? (
                        <View style={styles.center}>
                            <ActivityIndicator size="large"/>
                        </View>
                    ) : (
                        <FlatList
                            data={filtered}
                            keyExtractor={(item) => String(item.id)}
                            renderItem={renderItem}
                            contentContainerStyle={styles.listContent}
                            refreshControl={
                                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                            }
                            ListEmptyComponent={
                                <BAlert type="warning">
                                    <Text>Nenhum Pokémon encontrado.</Text>
                                </BAlert>
                            }
                        />
                    )}
                </View>

    );
}

function capitalize(str = '') {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const styles = StyleSheet.create({
    searchWrapper: {
        alignSelf: 'stretch',
        position: 'relative',
        marginBottom: 12,
    },
    searchIcon: {
        position: 'absolute',
        left: 12,
        top: 10,
        fontSize: 18,
        zIndex: 10,
    },
    clearBtn: {
        position: 'absolute',
        right: 10,
        top: 6,
        height: 32,
        width: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
    },
    clearText: {
        fontSize: 16,
        color: '#666',
    },
    search: {
        height: 44,
        borderWidth: 0,
        borderRadius: 12,
        paddingLeft: 40,
        paddingRight: 44,
        backgroundColor: '#fff',
        fontSize: 15,
    },

    listContent: {
        paddingBottom: 24,
        width: '100%',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 8,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.08,
        shadowRadius: 3,
        elevation: 2,
    },
    itemSelected: {
        backgroundColor: '#dbeaff',
        borderWidth: 2,
        borderColor: '#4A90E2',
    },
    nameSelected: {
        color: '#2a4c7b',
        fontWeight: '700',
    },
    sprite: {
        width: 64,
        height: 64,
        marginRight: 12,
    },
    info: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111',
    },


    genButtonsWrapper: {
        marginBottom: 12,
    },
    genButtonsScroll: {
        paddingVertical: 6,
        paddingHorizontal: 2,
    },

    genBtn: {
        minWidth: 56,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 6,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    genBtnSelected: {
        backgroundColor: '#4A90E2',
        shadowOpacity: 0.12,
        elevation: 3,
    },
    genBtnText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#222',
    },
    genBtnTextSelected: {
        color: '#fff',
    },
});
