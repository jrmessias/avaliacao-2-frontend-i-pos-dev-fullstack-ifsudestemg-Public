import React from "react";
import TabOneScreen from "./TabOneScreen";
import TabTwoScreen from "./TabTwoScreen";
import TabThreeScreen from "./TabThreeScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function DashboardTabsScreen() {
    return <>
        <Tab.Navigator initialRouteName="TabOne" screenOptions={{ headerShown: false }}>
            <Tab.Screen name="TabOne" component={TabOneScreen} options={{ title: 'Geração I-III' }} />
            <Tab.Screen name="TabTwo" component={TabTwoScreen} options={{ title: 'Geração IV-VI' }} />
            <Tab.Screen name="TabThree" component={TabThreeScreen} options={{ title: 'Geração VII-IX' }} />
        </Tab.Navigator>
    </>
}
