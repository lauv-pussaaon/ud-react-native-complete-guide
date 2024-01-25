import React from "react";
import { TouchableOpacity, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

function MiniMap({ coordinate, title, description }) {
    const navigation = useNavigation();

    function openFullMap() {
        navigation.navigate("FullMap", { coordinate, title, description });
    }

    return (
        <>
            <MapView style={styles.map} initialRegion={coordinate}>
                <Marker
                    coordinate={coordinate}
                    title={title}
                    description={description}
                />
            </MapView>
            <TouchableOpacity style={styles.fullMapLink} onPress={openFullMap}>
                <Text style={styles.fullMapText}>View Full Map</Text>
            </TouchableOpacity>
        </>
    );
}

export default MiniMap;
