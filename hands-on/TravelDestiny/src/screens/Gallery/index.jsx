import React from "react";
import { SafeAreaView, Image, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

function Gallery({ route }) {
    const { images } = route.params || [];
    const navigation = useNavigation();

    function onBack() {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={onBack}
                hitSlop={8}
                style={styles.backButtonContainer}>
                <Image
                    style={styles.backButton}
                    source={require("../../assets/icons/back-button.png")}
                />
            </TouchableOpacity>
            <FlatList
                data={images}
                renderItem={({ item: image_url }) => (
                    <Image source={{ uri: image_url }} style={styles.image} />
                )}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

export default Gallery;
