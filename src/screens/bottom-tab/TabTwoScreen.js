import {ScrollView, Text, View} from "react-native";
import React from "react";
import {globalStyles} from "../../assets/globalStyles";
import BackStackButton from "../../components/BackStackButton";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

export default function TabTwoScreen({navigation}) {
    return <>
        <SafeAreaProvider>
            <SafeAreaView style={[globalStyles.container, globalStyles.center]}>
                <ScrollView>
                <View>
                    <Text style={globalStyles.title}>Geração IV-VI</Text>

                    <View>
                        <Text style={globalStyles.textTitle}>Geração IV — Sinnoh (2006)</Text>
                        <Text style={globalStyles.textParagraph}>
                            Organizou os ataques em categorias físicas/especiais por movimento, o que transformou o
                            metagame. Também marcou a chegada da conexão online mais robusta.
                        </Text>

                        <Text style={globalStyles.textTitle}>Geração V — Unova (2010)</Text>
                        <Text style={globalStyles.textParagraph}>
                            Introduziu só Pokémon originais na história até o pós-game, criando uma sensação de
                            recomeço. Explorou temas urbanos, sociais e narrativos de forma mais profunda.
                        </Text>

                        <Text style={globalStyles.textTitle}>Geração VI — Kalos (2013)</Text>
                        <Text style={globalStyles.textParagraph}>
                            Primeira em 3D. Trouxe o tipo Fairy e o sistema de Mega Evoluções, adicionando novas camadas
                            estratégicas.
                        </Text>
                    </View>
                    <BackStackButton navigation={navigation}/>
                </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    </>
}
