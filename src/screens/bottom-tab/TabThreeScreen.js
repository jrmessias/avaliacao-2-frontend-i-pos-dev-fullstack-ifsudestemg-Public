import {Text, View} from "react-native";
import React from "react";
import {globalStyles} from "../../assets/globalStyles";
import BackStackButton from "../../components/BackStackButton";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

export default function TabThreeScreen({navigation}) {
    return <>
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={globalStyles.center}>
                    <Text style={globalStyles.title}>Geração VII-IX</Text>

                    <View style={globalStyles.container}>
                        <Text style={globalStyles.textTitle}>Geração VII — Alola (2016)</Text>
                        <Text style={globalStyles.textParagraph}>
                            Substituiu Ginásios por Desafios de Ilha e introduziu formas regionais. A narrativa ganhou
                            mais foco e personalidade.
                        </Text>

                        <Text style={globalStyles.textTitle}>Geração VIII — Galar (2019)</Text>
                        <Text style={globalStyles.textParagraph}>
                            Levou a franquia ao ambiente híbrido de mundo aberto parcial com áreas selvagens. Dinamax e
                            Gigantamax transformaram as batalhas em eventos grandiosos.
                        </Text>

                        <Text style={globalStyles.textTitle}>Geração IX — Paldea (2022)</Text>
                        <Text style={globalStyles.textParagraph}>
                            Primeira com mundo aberto total. O fenômeno Terastal abriu espaços novos para manipular
                            tipos, e a estrutura não linear reformulou o progresso tradicional.
                        </Text>
                    </View>

                    <BackStackButton navigation={navigation}/>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    </>
}
