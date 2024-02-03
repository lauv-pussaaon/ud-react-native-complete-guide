import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./src/screens/Splash";
import Home from "./src/screens/Home";
import RecipeDetail from "./src/screens/RecipeDetail";
import SearchRecipe from "./src/screens/SearchRecipe";
import BackButton from "./src/components/BackButton";
import AppTheme from "./src/constants/AppTheme.js";

export default function App() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer theme={AppTheme}>
            <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: "#fff",
                    },
                }}
            >
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerLeft: null,
                        gestureEnabled: false,
                    }}
                />
                <Stack.Screen
                    name="SearchRecipe"
                    component={SearchRecipe}
                    options={{
                        headerLeft: () => <BackButton />,
                        gestureEnabled: false,
                        title: "Search Recipes",
                    }}
                />
                <Stack.Screen
                    name="RecipeDetail"
                    component={RecipeDetail}
                    options={{
                        headerLeft: () => <BackButton />,
                        gestureEnabled: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
