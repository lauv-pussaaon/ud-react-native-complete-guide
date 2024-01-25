import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import MiniMap from "./MiniMap";
import styles from "./styles";
import BackButton from "../../components/BackButton";
import ShareButton from "../../components/ShareButton";
import AttractionGallery from "./AttractionGallery";
import AttractionInfo from "./AttractionInfo";
import { useUIContext } from "../../context/UIContext";

function AttractionDetail({ route }) {
    const { item: attraction } = route?.params || {};
    const { hasNotch } = useUIContext();
    const mapCoordinate = {
        latitude: attraction.coordinates.lat,
        longitude: attraction.coordinates.lon,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,
    };
    return (
        <SafeAreaView
            style={[styles.container, hasNotch ? { marginTop: 52 } : {}]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <BackButton />
                <ShareButton />
                <AttractionGallery images={attraction.images} />
                <AttractionInfo attraction={attraction} />
                <MiniMap
                    coordinate={mapCoordinate}
                    title={attraction.name}
                    description={`${attraction.city}, ${attraction.country}`}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

export default AttractionDetail;
