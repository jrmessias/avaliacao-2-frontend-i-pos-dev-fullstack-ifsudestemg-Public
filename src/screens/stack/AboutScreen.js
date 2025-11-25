import {ScrollView, Text, View, StyleSheet, Platform} from "react-native";
import React from "react";

export default function AboutScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.h1}>Sobre o Aplicativo</Text>

            <View style={styles.card}>
                <Text style={styles.h2}>Informações do Projeto</Text>
                <Text style={styles.p}>Autor: Israel Aparecido Messias Junior</Text>
                <Text style={styles.p}>Professor: Robson de Souza Resende</Text>
                <Text style={styles.p}>Data de Criação: Novembro de 2025</Text>
                <Text style={styles.p}>Disciplina: Desenvolvimento Front-end I</Text>

                <Text style={styles.h2}>Objetivo da Aplicação</Text>
                <Text style={styles.p}>
                    Este aplicativo foi desenvolvido como parte da avaliação da disciplina de Desenvolvimento
                    Front-end I da Pós Graduação Full-Stack do IFSudesteMG.
                </Text>
                <Text style={styles.h2}>Tecnologias Utilizadas</Text>
                <View style={styles.list}>
                    <Text style={styles.listItem}>• Node.js</Text>
                    <Text style={styles.listItem}>• Reactive Native</Text>
                </View>
            </View>
        </ScrollView>
    );
}

    const styles = StyleSheet.create({
        container: {
            padding: 16,
        },
        h1: {
            fontSize: 22,
            fontWeight: '700',
            marginBottom: 12,
            color: '#222',
        },
        card: {
            borderRadius: 10,
            padding: 16,
            marginBottom: 12,
            // shadow (iOS) / elevation (Android)
            ...Platform.select({
                ios: {
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.12,
                    shadowRadius: 6,
                },
                android: {
                    elevation: 3,
                },
            }),
        },
        h2: {
            fontSize: 18,
            fontWeight: '700',
            marginTop: 8,
            marginBottom: 8,
            color: '#111',
        },
        p: {
            fontSize: 14,
            lineHeight: 20,
            marginBottom: 8,
            color: '#333',
        },
        list: {
            marginVertical: 8,
            paddingLeft: 4,
        },
        listItem: {
            fontSize: 14,
            lineHeight: 20,
            marginBottom: 6,
            color: '#333',
        },
    });
