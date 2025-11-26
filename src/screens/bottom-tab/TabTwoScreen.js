import {ScrollView, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import React from "react";
import {globalStyles} from "../../assets/globalStyles";
import BackStackButton from "../../components/BackStackButton";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import BAlert from "../../components/bootstrap/BAlert";

export default function TabTwoScreen({navigation}) {

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
                        <Text style={styles.resH1}>Geração IV-VI</Text>
                        <View>
                            <Text style={styles.resTitle}>Geração IV — Sinnoh (2006)</Text>
                            <Text style={styles.resParagraph}>
                                Organizou os ataques em categorias físicas/especiais por movimento, o que transformou o
                                metagame. Também marcou a chegada da conexão online mais robusta.
                            </Text>

                            <Text style={styles.resTitle}>Geração V — Unova (2010)</Text>
                            <Text style={styles.resParagraph}>
                                Introduziu só Pokémon originais na história até o pós-game, criando uma sensação de
                                recomeço. Explorou temas urbanos, sociais e narrativos de forma mais profunda.
                            </Text>

                            <Text style={styles.resTitle}>Geração VI — Kalos (2013)</Text>
                            <Text style={styles.resParagraph}>
                                Primeira em 3D. Trouxe o tipo Fairy e o sistema de Mega Evoluções, adicionando novas
                                camadas
                                estratégicas.
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
