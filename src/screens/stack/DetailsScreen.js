import {ActivityIndicator, Text, View, StyleSheet, Image} from "react-native";
import React, {useEffect, useState} from "react";
import {globalStyles} from "../../assets/globalStyles";
import NavigationButtons from "../../components/NavigationButtons";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

export default function DetailsScreen({navigation}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const loadPokemon = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.log('Erro ao buscar Pokémon:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadPokemon();
    }, []);

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return <>
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={globalStyles.container}>

                    <View style={styles.container}>
                        <Text style={styles.name}>{data.name.toUpperCase()}</Text>

                        <Image
                            source={{ uri: data.sprites.front_default }}
                            style={{ width: 120, height: 120 }}
                        />

                        <Text style={styles.info}>ID: {data.id}</Text>
                        <Text style={styles.info}>Altura: {data.height}</Text>
                        <Text style={styles.info}>Peso: {data.weight}</Text>

                        <Text style={styles.info}>
                            Tipo: {data.types.map(t => t.type.name).join(', ')}
                        </Text>
                    </View>

                    <NavigationButtons navigation={navigation}/>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    </>
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    name: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 12
    },
    info: {
        fontSize: 16,
        marginTop: 4
    }
});
