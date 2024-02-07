import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoarding from "./src/screens/auth/OnBoarding";
import Signin from "./src/screens/auth/Signin";
import AppTheme from "./src/constants/AppTheme";

function App() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer theme={AppTheme}>
            <Stack.Navigator
                initialRouteName="OnBoarding"
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen
                    name="OnBoarding"
                    component={OnBoarding}></Stack.Screen>
                <Stack.Screen name="Signin" component={Signin}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
