import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

function Button({ children, type = "primary", ...props }) {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                type === "primary"
                    ? styles.primaryButton
                    : styles.secondaryButton,
            ]}
            {...props}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );
}

export default Button;
