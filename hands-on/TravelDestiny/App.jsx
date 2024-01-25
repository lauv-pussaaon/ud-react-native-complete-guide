import "react-native-gesture-handler";
import React from "react";
import Home from "./src/screens/Home";
import AttractionDetail from "./src/screens/AttractionDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Gallery from "./src/screens/Gallery";

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
                <Stack.Screen name="Gallery" component={Gallery} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
