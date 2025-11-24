import {Button, Text, View} from "react-native";
import React from "react";
import {globalStyles} from "../../assets/globalStyles";
import NavigationButtons from "../../components/NavigationButtons";

export default function WelcomeScreen({navigation}) {
    return (
        <View style={globalStyles.center}>
            <Text style={globalStyles.title}>Welcome</Text>
            <NavigationButtons navigation={navigation}/>
            <Button title="Ir para Dashboard (Tabs)" onPress={() => navigation.navigate('Dashboard')}/>
            <View style={{height: 12}}/>
            <Button title="Ir para Details (Stack)" onPress={() => navigation.navigate('Details')}/>
        </View>
    );
}
