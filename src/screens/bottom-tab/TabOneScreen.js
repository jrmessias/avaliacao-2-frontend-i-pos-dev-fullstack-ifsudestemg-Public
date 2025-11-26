import {ScrollView, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import React from "react";
import {globalStyles} from "../../assets/globalStyles";
import BackStackButton from "../../components/BackStackButton";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import BAlert from "../../components/bootstrap/BAlert";

export default function TabOneScreen({navigation}) {

    const {width, height} = useWindowDimensions();
    const isTablet = width > 700;

    const styles = StyleSheet.create({
        // Responsive
        resH1: {
            fontSize: isTablet ? 28 : 24,
            marginBottom: 12,
            fontWeight: '700',
        },
        resTitle: {
            fontSize: isTablet ? 26 : 22,
            marginBottom: 12,
            fontWeight: '700',
        },
        resParagraph: {
            fontSize: isTablet ? 16 : 14,
            lineHeight: 20,
            marginBottom: 16,
            color: '#444'
        },
        resContainerButton: {
            width: isTablet ? "20%" : "50%",
        }
    });

    return <>
        <SafeAreaProvider>
            <SafeAreaView style={[globalStyles.container, globalStyles.center]}>
                <ScrollView>
                    <View>
                        <BAlert type="info">Esta é uma página responsiva (> 700px)</BAlert>
                        <Text style={styles.resH1}>Geração I-III</Text>
                        <View>
                            <Text style={styles.resTitle}>Geração I — Kanto (1996)</Text>
                            <Text style={styles.resParagraph}>
                                Apresentou o conceito básico da franquia: capturar criaturas, montar times e vencer
                                Ginásios.
                                Simples e direto, consolidou muitos dos ícones que permanecem até hoje.
                            </Text>

                            <Text style={styles.resTitle}>Geração II — Johto (1999)</Text>
                            <Text style={styles.resParagraph}>
                                Ampliou o mundo, trouxe ciclo dia/noite, criação de ovos e dois novos tipos (Dark e
                                Steel).
                                Refinou mecânicas sem perder a essência da anterior.
                            </Text>

                            <Text style={styles.resTitle}>Geração III — Hoenn (2002)</Text>
                            <Text style={styles.resParagraph}>
                                Reescreveu toda a base técnica, trouxe habilidades, natureza dos Pokémon e competições.
                                Deu um salto na profundidade do sistema de batalha.
                            </Text>
                        </View>
                        <View style={styles.resContainerButton}>
                            <BackStackButton navigation={navigation}/>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    </>
}
