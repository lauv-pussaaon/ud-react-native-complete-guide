import React from "react";
import styles from "./styles";
import { TouchableOpacity, Image } from "react-native";

function ShareButton({ onShare }) {
    return (
        <TouchableOpacity
            onPress={onShare}
            hitSlop={8}
            style={styles.buttonContainer}>
            <Image
                style={styles.icon}
                source={require("../../assets/icons/share-button.png")}
            />
        </TouchableOpacity>
    );
}

export default ShareButton;
