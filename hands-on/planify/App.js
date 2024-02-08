import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { UIContextProvider } from "./src/context/UIContext";
import AppTheme from "./src/constants/AppTheme";
import Routes from "./src/Routes";

function App() {
    return (
        <UIContextProvider>
            <NavigationContainer theme={AppTheme}>
                <Routes />
            </NavigationContainer>
        </UIContextProvider>
    );
}

export default App;
