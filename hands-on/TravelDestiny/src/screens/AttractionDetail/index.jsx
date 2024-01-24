import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, SafeAreaView, ImageBackground } from "react-native";
import styles from "./styles";

function AttractionDetail({ route }) {
    const { item: attraction } = route?.params || {};
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
                imageStyle={styles.image}
            />
            <Text onPress={onBack}>Back</Text>
            <Text>Attraction Detail - {attraction.name}</Text>
        </SafeAreaView>
    );
}

export default AttractionDetail;
