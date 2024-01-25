import React from "react";
import { SafeAreaView, Image, FlatList } from "react-native";
import styles from "./styles";
import BackButton from "../../components/BackButton";

function Gallery({ route }) {
    const { images } = route.params || [];

    return (
        <SafeAreaView style={styles.container}>
            <BackButton />
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
