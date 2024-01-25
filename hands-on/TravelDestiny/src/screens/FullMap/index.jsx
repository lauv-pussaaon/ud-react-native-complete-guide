import React from "react";
import { View, Text } from "react-native";
import Map, { Marker } from "react-native-maps";
import BackButton from "../../components/BackButton";
import { useUIContext } from "../../context/UIContext";
import styles from "./styles";

function FullMap({ route }) {
    const { coordinate, title, description } = route.params;
    const { hasNotch } = useUIContext();

    return (
        <View style={styles.mapContainer}>
            <View style={styles.locationInfoBox}>
                <Text>{title}</Text>
                <Text>{description}</Text>
            </View>
            <BackButton
                customPosition={{ top: hasNotch ? 72 : 32, left: 32 }}
                customIconStyle={{ width: 50, height: 50 }}
            />
            <Map initialRegion={coordinate} style={styles.map}>
                <Marker
                    coordinate={coordinate}
                    title={title}
                    description={description}
                />
            </Map>
        </View>
    );
}

export default FullMap;
