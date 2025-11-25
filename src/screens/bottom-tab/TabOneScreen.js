import {Text, View} from "react-native";
import React from "react";
import {globalStyles} from "../../assets/globalStyles";
import BackStackButton from "../../components/BackStackButton";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

export default function TabOneScreen({navigation}) {
    return <>
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={globalStyles.center}>
                    <Text style={globalStyles.title}>Geração I-III</Text>

                    <View style={globalStyles.container}>
                        <Text style={globalStyles.textTitle}>Geração I — Kanto (1996)</Text>
                        <Text style={globalStyles.textParagraph}>
                            Apresentou o conceito básico da franquia: capturar criaturas, montar times e vencer
                            Ginásios.
                            Simples e direto, consolidou muitos dos ícones que permanecem até hoje.
                        </Text>

                        <Text style={globalStyles.textTitle}>Geração II — Johto (1999)</Text>
                        <Text style={globalStyles.textParagraph}>
                            Ampliou o mundo, trouxe ciclo dia/noite, criação de ovos e dois novos tipos (Dark e Steel).
                            Refinou mecânicas sem perder a essência da anterior.
                        </Text>

                        <Text style={globalStyles.textTitle}>Geração III — Hoenn (2002)</Text>
                        <Text style={globalStyles.textParagraph}>
                            Reescreveu toda a base técnica, trouxe habilidades, natureza dos Pokémon e competições.
                            Deu um salto na profundidade do sistema de batalha.
                        </Text>
                    </View>

                    <BackStackButton navigation={navigation}/>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    </>
}
