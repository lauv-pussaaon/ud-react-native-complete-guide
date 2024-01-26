import React from "react";
import styles from "./styles";
import { TouchableOpacity, Image } from "react-native";
import Share from "react-native-share";

function ShareButton({ message, url }) {
    const options = {
        message: message || "My travel destiny...",
        title: "Travel Destiny",
        url: url || "http://traveldestiny.com/",
    };
    function onShare() {
        async function share(options) {
            const shareResponse = await Share.open(options);

            console.log(shareResponse);
        }

        share(options);
    }

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
