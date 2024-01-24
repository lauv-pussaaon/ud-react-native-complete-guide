import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    View,
    Pressable,
    SafeAreaView,
    ImageBackground,
    Image,
} from "react-native";
import styles from "./styles";

function AttractionDetail({ route }) {
    const { item: attraction } = route?.params || {};
    console.log(attraction.images.length);
    const mainImage = attraction?.images?.at(0);
    const navigation = useNavigation();

    const onBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={styles.viewImage}
                source={{ uri: mainImage }}
                resizeMode="cover"
                imageStyle={styles.image}>
                <View style={styles.navBar}>
                    <Pressable onPress={onBack} hitSlop={8}>
                        <Image
                            style={styles.icon}
                            source={require("../../assets/icons/back-button.png")}
                        />
                    </Pressable>
                    <Pressable hitSlop={8}>
                        <Image
                            style={styles.icon}
                            source={require("../../assets/icons/share-button.png")}
                        />
                    </Pressable>
                </View>
                <View style={styles.thumbnailsContainer}>
                    {attraction?.images?.length
                        ? attraction?.images
                              .slice(0, 5)
                              .map(image => (
                                  <Image
                                      key={image}
                                      source={{ uri: image }}
                                      style={styles.thumbnail}
                                  />
                              ))
                        : null}
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default AttractionDetail;
