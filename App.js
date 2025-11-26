import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FavoriteScreen from "./src/screens/stack/FavoriteScreen";
import ListScreen from "./src/screens/stack/ListScreen";
import DashboardTabsScreen from "./src/screens/bottom-tab/DashboardTabsScreen";
import AboutScreen from "./src/screens/stack/AboutScreen";

// --- Navegadores ---
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Favorite" screenOptions={{
                headerStyle: {
                    backgroundColor: '#cc0000'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
                <Stack.Screen name="Favorite" component={FavoriteScreen} options={{title: 'Pokémons Favoritos'}}/>
                <Stack.Screen name="List" component={ListScreen} options={{title: 'Pokémon'}}/>
                {/* Esta tela do Stack contém o Bottom Tabs com três telas (TabOne, TabTwo, TabThree) */}
                <Stack.Screen
                    name="StackDashboard"
                    component={DashboardTabsScreen}
                    options={{headerShown: true, title: "Gerações"}}
                />
                <Stack.Screen name="About" component={AboutScreen} options={{title: 'Sobre'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
