import React from "react";
import { SafeAreaView } from "react-native";
import styles from "./styles";
import BackButton from "../../components/BackButton";
import ShareButton from "../../components/ShareButton";
import AttractionGallery from "./AttractionGallery";
import AttractionInfo from "./AttractionInfo";

function AttractionDetail({ route }) {
    const { item: attraction } = route?.params || {};

    return (
        <SafeAreaView style={styles.container}>
            <BackButton />
            <ShareButton />
            <AttractionGallery images={attraction.images} />
            <AttractionInfo attraction={attraction} />
        </SafeAreaView>
    );
}

export default AttractionDetail;
