import {Text, View} from "react-native";
import React from "react";
import {globalStyles} from "../../assets/globalStyles";
import NavigationButtons from "../../components/NavigationButtons";

export default function WelcomeScreen({navigation}) {
    return (
        <View style={globalStyles.center}>
            <Text style={globalStyles.title}>Inicial</Text>
            <NavigationButtons navigation={navigation}/>

        </View>
    );
}
