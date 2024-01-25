import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    View,
    SafeAreaView,
    ImageBackground,
    Image,
    TouchableOpacity,
    Text,
} from "react-native";
import styles from "./styles";
import BackButton from "../../components/BackButton";
import ShareButton from "../../components/ShareButton";

function AttractionDetail({ route }) {
    const { item: attraction } = route?.params || {};
    const mainImage = attraction?.images?.at(0);
    const navigation = useNavigation();
    const maxImageDisplay = 5;
    const moreImageCount = attraction.images?.length - maxImageDisplay;

    return (
        <SafeAreaView style={styles.container}>
            <BackButton />
            <ShareButton />
            <ImageBackground
                style={styles.mainImageContainer}
                source={{ uri: mainImage }}
                resizeMode="cover"
                imageStyle={styles.mainImage}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate("Gallery", {
                            images: attraction.images,
                        })
                    }>
                    <View style={styles.thumbnailListContainer}>
                        {attraction.images?.length
                            ? attraction.images
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
        </SafeAreaView>
    );
}

export default AttractionDetail;
