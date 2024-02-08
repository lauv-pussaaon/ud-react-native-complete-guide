import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import OnBoarding from "./screens/auth/OnBoarding";
import Signin from "./screens/auth/Signin";
import Signup from "./screens/auth/Signup";
import auth from "@react-native-firebase/auth";
import Button from "./components/Button";

function Routes() {
    const Stack = createStackNavigator();

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    function logout() {
        auth().signOut();
    }

    if (initializing) return null;

    if (user) {
        return (
            <View style={{ margin: 36, gap: 24 }}>
                <Text>Welcome {user?.displayName}</Text>
                <Button onPress={logout}>Logout</Button>
            </View>
        );
    }

    return (
        <Stack.Navigator
            initialRouteName="OnBoarding"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
                name="OnBoarding"
                component={OnBoarding}></Stack.Screen>
            <Stack.Screen name="Signin" component={Signin}></Stack.Screen>
            <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
        </Stack.Navigator>
    );
}

export default Routes;
