import React from "react";
import { SafeAreaView, Image, FlatList } from "react-native";
import styles from "./styles";
import BackButton from "../../components/BackButton";
import { useUIContext } from "../../context/UIContext";

function Gallery({ route }) {
    const { images } = route.params || [];
    const { hasNotch } = useUIContext();

    return (
        <SafeAreaView
            style={[styles.container, hasNotch ? { marginTop: 52 } : {}]}>
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
