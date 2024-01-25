import "react-native-gesture-handler";
import React from "react";
import Home from "./src/screens/Home";
import AttractionDetail from "./src/screens/AttractionDetail";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Gallery from "./src/screens/Gallery";
import { UIContextProvider } from "./src/context/UIContext";
import FullMap from "./src/screens/FullMap";

function App() {
    const Stack = createStackNavigator();

    const AppTheme = {
        ...DefaultTheme,
        colors: {
            background: "rgb(255, 255, 255)",
        },
    };

    return (
        <UIContextProvider>
            <NavigationContainer theme={AppTheme}>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={Home}></Stack.Screen>
                    <Stack.Screen
                        name="AttractionDetail"
                        component={AttractionDetail}></Stack.Screen>
                    <Stack.Screen name="Gallery" component={Gallery} />
                    <Stack.Screen name="FullMap" component={FullMap} />
                </Stack.Navigator>
            </NavigationContainer>
        </UIContextProvider>
    );
}

export default App;
