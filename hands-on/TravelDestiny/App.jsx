import "react-native-gesture-handler";
import React from "react";
import Home from "./src/screens/Home";
import AttractionDetail from "./src/screens/AttractionDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function App() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen
                    name="AttractionDetail"
                    component={AttractionDetail}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
