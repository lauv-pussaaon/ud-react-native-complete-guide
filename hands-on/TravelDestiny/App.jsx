import "react-native-gesture-handler";
import React from "react";
import Home from "./src/screens/Home";
import AttractionDetail from "./src/screens/AttractionDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Gallery from "./src/screens/Gallery";
import { UIContextProvider } from "./src/context/UIContext";

function App() {
    const Stack = createStackNavigator();

    return (
        <UIContextProvider>
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
        </UIContextProvider>
    );
}

export default App;
