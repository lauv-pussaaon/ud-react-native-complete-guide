import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    Text,
} from "react-native";
import styles from "./styles";

function AttractionGallery({ images }) {
    const mainImage = images?.at(0) || [];
    const navigation = useNavigation();
    const maxImageDisplay = 5;
    const moreImageCount = images?.length - maxImageDisplay;

    return (
        <ImageBackground
            style={styles.mainImageContainer}
            source={{ uri: mainImage }}
            resizeMode="cover"
            imageStyle={styles.mainImage}>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate("Gallery", {
                        images: images,
                    })
                }>
                <View style={styles.thumbnailListContainer}>
                    {images?.length
                        ? images
                              .slice(0, maxImageDisplay)
                              .map((image, index) => (
                                  <View key={index}>
                                      <Image
                                          source={{ uri: image }}
                                          style={styles.thumbnail}
                                      />
                                      {index === maxImageDisplay - 1 &&
                                          moreImageCount > 0 && (
                                              <View
                                                  key={index}
                                                  style={[
                                                      styles.moreImageContainer,
                                                      styles.thumbnail,
                                                  ]}>
                                                  <Text
                                                      style={
                                                          styles.moreImageCount
                                                      }>
                                                      {moreImageCount}
                                                  </Text>
                                              </View>
                                          )}
                                  </View>
                              ))
                        : null}
                </View>
            </TouchableOpacity>
        </ImageBackground>
    );
}

export default AttractionGallery;
