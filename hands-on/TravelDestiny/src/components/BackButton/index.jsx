import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

function BackButton() {
    const navigation = useNavigation();

    function onBack() {
        navigation.goBack();
    }

    return (
        <TouchableOpacity
            onPress={onBack}
            hitSlop={8}
            style={styles.backButtonContainer}>
            <Image
                style={styles.backButton}
                source={require("../../assets/icons/back-button.png")}
            />
        </TouchableOpacity>
    );
}

export default BackButton;
