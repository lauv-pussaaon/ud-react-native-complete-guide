import React, { useEffect, useState } from "react";
import styles from "./styles";
import { TouchableOpacity, Image } from "react-native";
import Share from "react-native-share";
import ImgToBase64 from "react-native-image-base64";
import { extractImageExtension } from "../../utils/image_helper";

function ShareButton({ message, url, imageUrl }) {
    const [imageBase64Url, setImageBase64Url] = useState(null);

    useEffect(() => {
        async function prepareImage() {
            if (imageUrl) {
                const imageExtension = imageUrl
                    ? extractImageExtension(imageUrl)
                    : null;
                const imageBase64 = (await imageUrl)
                    ? await ImgToBase64.getBase64String(imageUrl)
                    : null;
                const url = `data:image/${
                    imageExtension || "jpg"
                };base64,${imageBase64}`;

                setImageBase64Url(url);
            }
        }
        prepareImage();
    }, []);

    function onShare() {
        async function share() {
            try {
                const options = {
                    message: message || "My travel destiny...",
                    title: "Travel Destiny",
                    url: imageBase64Url || url || "www.travel-destiny.com",
                };

                await Share.open(options);

                console.log(options);
                console.log("Shared successfully");
            } catch (error) {
                console.log("Error => failed to share due to ", error);
            }
        }

        share();
    }

    if (imageUrl && !imageBase64Url) return null;

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
