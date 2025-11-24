import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from "./src/screens/stack/WelcomeScreen";
import DetailsScreen from "./src/screens/stack/DetailsScreen";
import DashboardTabsScreen from "./src/screens/bottom-tab/DashboardTabsScreen";
import AboutScreen from "./src/screens/stack/AboutScreen";

// --- Telas simples ---
// function WelcomeScreen({ navigation }) {
//     return (
//         <View style={styles.center}>
//             <Text style={styles.title}>Welcome</Text>
//             <Button title="Ir para Dashboard (Tabs)" onPress={() => navigation.navigate('Dashboard')} />
//             <View style={{ height: 12 }} />
//             <Button title="Ir para Details (Stack)" onPress={() => navigation.navigate('Details')} />
//         </View>
//     );
// }

// function DetailsScreen({ navigation }) {
//     return (
//         <View style={styles.center}>
//             <Text style={styles.title}>Details</Text>
//             <Button title="Welcome" onPress={() => navigation.navigate('Welcome')} />
//             <Button title="Voltar" onPress={() => navigation.goBack()} />
//         </View>
//     );
// }

// --- Bottom Tabs screens ---
// function TabOneScreen({ navigation }) {
//     return (
//         <View style={styles.center}>
//             <Text style={styles.title}>Aba 1</Text>
//             <Button title="Ir para Details (Stack)" onPress={() => navigation.getParent()?.navigate('Details')} />
//         </View>
//     );
// }

// function TabTwoScreen() {
//     return (
//         <View style={styles.center}>
//             <Text style={styles.title}>Aba 2</Text>
//         </View>
//     );
// }

// --- Navegadores ---
const Stack = createNativeStackNavigator();




export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Bem-vindo' }} />

                {/* Esta tela do Stack contém o Bottom Tabs com duas telas (TabOne, TabTwo) */}
                <Stack.Screen
                    name="Dashboard"
                    component={DashboardTabsScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalhes' }} />
                <Stack.Screen name="About" component={AboutScreen} options={{ title: 'Sobre' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
