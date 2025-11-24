import React from "react";
import TabOneScreen from "./TabOneScreen";
import TabTwoScreen from "./TabTwoScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function DashboardTabsScreen() {
    return (
        <Tab.Navigator initialRouteName="TabOne">
            <Tab.Screen name="TabOne" component={TabOneScreen} options={{ title: 'Aba 1' }} />
            <Tab.Screen name="TabTwo" component={TabTwoScreen} options={{ title: 'Aba 2' }} />
        </Tab.Navigator>
    );
}
