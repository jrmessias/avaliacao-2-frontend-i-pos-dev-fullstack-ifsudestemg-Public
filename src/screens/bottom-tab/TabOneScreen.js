import {Button, Text, View} from "react-native";
import React from "react";
import {globalStyles} from "../../assets/globalStyles";

export default function TabOneScreen({ navigation }) {
    return (
        <View style={globalStyles.center}>
            <Text style={globalStyles.title}>Aba 1</Text>
            <Button title="Ir para Details (Stack)" onPress={() => navigation.getParent()?.navigate('Details')} />
        </View>
    );
}
