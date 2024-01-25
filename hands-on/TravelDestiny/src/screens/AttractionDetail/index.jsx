import React from "react";
import { SafeAreaView } from "react-native";
import styles from "./styles";
import BackButton from "../../components/BackButton";
import ShareButton from "../../components/ShareButton";
import AttractionGallery from "./AttractionGallery";
import AttractionInfo from "./AttractionInfo";
import { useUIContext } from "../../context/UIContext";

function AttractionDetail({ route }) {
    const { item: attraction } = route?.params || {};
    const { hasNotch } = useUIContext();
    return (
        <SafeAreaView
            style={[styles.container, hasNotch ? { marginTop: 52 } : {}]}>
            <BackButton />
            <ShareButton />
            <AttractionGallery images={attraction.images} />
            <AttractionInfo attraction={attraction} />
        </SafeAreaView>
    );
}

export default AttractionDetail;
