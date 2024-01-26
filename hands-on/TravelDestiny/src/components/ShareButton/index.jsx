import React from "react";
import styles from "./styles";
import { TouchableOpacity, Image } from "react-native";
import Share from "react-native-share";
import ImgToBase64 from "react-native-image-base64";
import { extractImageExtension } from "../../utils/image_helper";

function ShareButton({ message, url, image_url }) {
    function onShare() {
        async function share() {
            try {
                const imageBase64 = (await image_url)
                    ? await ImgToBase64.getBase64String(image_url)
                    : null;
                const imageExtension = image_url
                    ? extractImageExtension(image_url)
                    : null;

                const options = {
                    message: message || "My travel destiny...",
                    title: "Travel Destiny",
                    url: imageBase64
                        ? `data:image/${
                              imageExtension || "jpg"
                          };base64,${imageBase64}`
                        : url || "www.travel-destiny.com",
                };

                await Share.open(options);

                console.log("Shared successfully", options);
            } catch (error) {
                console.log("Error => failed to share due to ", error);
            }
        }

        share();
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
