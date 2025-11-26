import {ScrollView, Text, View} from "react-native";
import React from "react";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {globalStyles} from "../../assets/globalStyles";

export default function AboutScreen({navigation}) {
    return <>
        <SafeAreaProvider>
            <SafeAreaView style={[globalStyles.container, globalStyles.center]}>
                <ScrollView>
                    <Text style={globalStyles.title}>Sobre o Aplicativo</Text>
                    <View>
                        <Text style={globalStyles.textTitle}>Informações do Projeto</Text>
                        <Text style={globalStyles.textParagraph}>Autor: Israel Aparecido Messias Junior</Text>
                        <Text style={globalStyles.textParagraph}>Professor: Robson de Souza Resende</Text>
                        <Text style={globalStyles.textParagraph}>Data de Criação: Novembro de 2025</Text>
                        <Text style={globalStyles.textParagraph}>Disciplina: Desenvolvimento Front-end I</Text>

                        <Text style={globalStyles.textTitle}>Objetivo da Aplicação</Text>
                        <Text style={globalStyles.textParagraph}>
                            Este aplicativo foi desenvolvido como parte da avaliação da disciplina de Desenvolvimento
                            Front-end I da Pós Graduação Full-Stack do IFSudesteMG.
                        </Text>
                        <Text style={globalStyles.textTitle}>Dedicatória</Text>
                        <Text style={globalStyles.textParagraph}>
                            Ao meu filho Rafael, que gosta de pokémons, em cartas e desenhos.
                        </Text>
                        <Text style={globalStyles.textTitle}>Tecnologias Utilizadas</Text>
                        <View style={globalStyles.textParagraph}>
                            <Text style={globalStyles.textParagraph}>- Node.js</Text>
                            <Text style={globalStyles.textParagraph}>- Reactive Native</Text>
                            <Text style={globalStyles.textParagraph}>- Expo</Text>
                            <Text style={globalStyles.textParagraph}>- pokeApi</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    </>
}
