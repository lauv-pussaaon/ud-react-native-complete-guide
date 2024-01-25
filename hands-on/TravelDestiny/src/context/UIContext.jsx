import React, { createContext, useState, useContext, useEffect } from "react";
import DeviceInfo from "react-native-device-info";

const UIContext = createContext();

function UIContextProvider({ children }) {
    const [hasNotch, setHasNotch] = useState(false);

    useEffect(() => {
        setHasNotch(DeviceInfo.hasNotch());
    }, []);

    return (
        <UIContext.Provider value={{ hasNotch, setHasNotch }}>
            {children}
        </UIContext.Provider>
    );
}

function useUIContext() {
    return useContext(UIContext);
}

export { UIContextProvider, useUIContext };
