import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

function BackButton({ customPosition, customIconStyle }) {
    const navigation = useNavigation();

    function onBack() {
        navigation.goBack();
    }

    return (
        <TouchableOpacity
            onPress={onBack}
            hitSlop={8}
            style={[styles.backButtonContainer, customPosition]}>
            <Image
                style={[styles.backButton, customIconStyle]}
                source={require("../../assets/icons/back-button.png")}
            />
        </TouchableOpacity>
    );
}

export default BackButton;
