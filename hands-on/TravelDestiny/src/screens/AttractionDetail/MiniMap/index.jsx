import React from "react";
import { TouchableOpacity, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styles from "./styles";

function MiniMap({ coordinate, title, description }) {
    return (
        <>
            <MapView style={styles.map} initialRegion={coordinate}>
                <Marker
                    coordinate={coordinate}
                    title={title}
                    description={description}
                />
            </MapView>
            <TouchableOpacity style={styles.fullMapLink}>
                <Text style={styles.fullMapText}>View Full Map</Text>
            </TouchableOpacity>
        </>
    );
}

export default MiniMap;
