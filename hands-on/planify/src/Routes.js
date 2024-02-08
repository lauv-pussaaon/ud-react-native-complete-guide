import React, { useEffect, useState } from "react";
import { Image } from "react-native";

import OnBoarding from "./screens/auth/OnBoarding";
import Signin from "./screens/auth/Signin";
import Signup from "./screens/auth/Signup";
import auth from "@react-native-firebase/auth";
import AddTask from "./screens/app/AddTask";
import Home from "./screens/app/Home";
import Tasks from "./screens/app/Tasks";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import GlobalStyles from "./constants/GlobalStyles";
import "react-native-gesture-handler";
import DrawerContent from "./components/DrawerContent";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Routes() {
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

    if (initializing) return null;

    const Tabs = () => (
        <Tab.Navigator
            screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={GlobalStyles.tabIcon}
                            source={
                                focused
                                    ? require("./assets/icons/home-active.png")
                                    : require("./assets/icons/home-inactive.png")
                            }
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Tasks"
                component={Tasks}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={GlobalStyles.tabIcon}
                            source={
                                focused
                                    ? require("./assets/icons/calendar-active.png")
                                    : require("./assets/icons/calendar-inactive.png")
                            }
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );

    if (user) {
        return (
            <Drawer.Navigator
                drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="Tabs" component={Tabs} />
                <Drawer.Screen name="AddTask" component={AddTask} />
            </Drawer.Navigator>
        );
    }

    return (
        <Stack.Navigator
            initialRouteName="OnBoarding"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    );
}

export default Routes;
