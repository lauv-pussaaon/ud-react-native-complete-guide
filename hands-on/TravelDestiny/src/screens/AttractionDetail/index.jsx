import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    View,
    SafeAreaView,
    ImageBackground,
    Image,
    TouchableOpacity,
} from "react-native";
import styles from "./styles";
import BackButton from "../../components/BackButton";
import ShareButton from "../../components/ShareButton";

function AttractionDetail({ route }) {
    const { item: attraction } = route?.params || {};
    console.log(attraction.images.length);
    const mainImage = attraction?.images?.at(0);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <BackButton />
            <ShareButton />
            <ImageBackground
                style={styles.viewImage}
                source={{ uri: mainImage }}
                resizeMode="cover"
                imageStyle={styles.image}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate("Gallery", {
                            images: attraction.images,
                        })
                    }>
                    <View style={styles.thumbnailsContainer}>
                        {attraction.images?.length
                            ? attraction.images
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
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default AttractionDetail;
