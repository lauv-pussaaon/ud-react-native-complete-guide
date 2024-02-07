import React from "react";
import { Text } from "react-native";
import styles from "./styles";

function TitleBold({ children }) {
    return <Text style={styles.title}>{children}</Text>;
}

export default TitleBold;
