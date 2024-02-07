import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

function Link({ children, ...props }) {
    return (
        <TouchableOpacity {...props}>
            <Text style={styles.linkText}>{children}</Text>
        </TouchableOpacity>
    );
}

export default Link;
