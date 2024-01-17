import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

function AttractionCard({ attraction }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: attraction.images[0] }}
            />
            <Text style={styles.name} numberOfLines={1}>
                {attraction.name}
            </Text>
            <View style={styles.locationContainer}>
                <Image
                    style={styles.icon}
                    source={require("../../../assets/icons/location.png")}
                />
                <Text style={styles.location}>{attraction.location}</Text>
            </View>
        </View>
    );
}

export default AttractionCard;
