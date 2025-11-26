import {ScrollView, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import React from "react";
import {globalStyles} from "../../assets/globalStyles";
import BackStackButton from "../../components/BackStackButton";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import BAlert from "../../components/bootstrap/BAlert";

export default function TabThreeScreen({navigation}) {

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
                    <Text style={styles.resH1}>Geração VII-IX</Text>
                    <View>
                        <Text style={styles.resTitle}>Geração VII — Alola (2016)</Text>
                        <Text style={styles.resParagraph}>
                            Substituiu Ginásios por Desafios de Ilha e introduziu formas regionais. A narrativa ganhou
                            mais foco e personalidade.
                        </Text>

                        <Text style={styles.resTitle}>Geração VIII — Galar (2019)</Text>
                        <Text style={styles.resParagraph}>
                            Levou a franquia ao ambiente híbrido de mundo aberto parcial com áreas selvagens. Dinamax e
                            Gigantamax transformaram as batalhas em eventos grandiosos.
                        </Text>

                        <Text style={styles.resTitle}>Geração IX — Paldea (2022)</Text>
                        <Text style={styles.resParagraph}>
                            Primeira com mundo aberto total. O fenômeno Terastal abriu espaços novos para manipular
                            tipos, e a estrutura não linear reformulou o progresso tradicional.
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
