import {Button, Text, View} from "react-native";
import React from "react";
import {globalStyles} from "../../assets/globalStyles";
import NavigationButtons from "../../components/NavigationButtons";

export default function DetailsScreen({ navigation }) {
    return (
        <View style={globalStyles.center}>

            <Text style={globalStyles.title}>Details</Text>
            <NavigationButtons navigation={navigation}/>
            <Button title="Welcome" onPress={() => navigation.navigate('Welcome')} />
            {/*<Button title="Voltar" onPress={() => navigation.goBack()} />*/}
        </View>
    );
}
