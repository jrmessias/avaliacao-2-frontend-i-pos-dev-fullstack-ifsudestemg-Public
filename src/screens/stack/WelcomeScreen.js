import {Text, View} from "react-native";
import React from "react";
import {globalStyles} from "../../assets/globalStyles";
import NavigationButtons from "../../components/NavigationButtons";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

export default function WelcomeScreen({navigation}) {
    return <>
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={globalStyles.center}>
                    <Text style={globalStyles.title}>Inicial</Text>
                    <NavigationButtons navigation={navigation}/>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    </>
}
