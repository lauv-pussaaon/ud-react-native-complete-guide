import React from "react";
import { Text } from "react-native";
import styles from "./styles";

function TitleLight({ children }) {
    return <Text style={styles.title}>{children}</Text>;
}

export default TitleLight;
