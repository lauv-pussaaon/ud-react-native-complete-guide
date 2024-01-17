import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

function AttractionCard({ attraction, index, onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.container,
                { marginLeft: index % 2 === 0 ? 32 : 12 },
            ]}>
            <Image
                style={styles.image}
                source={{ uri: attraction.images[0] }}
            />
            <Text style={styles.name} numberOfLines={1}>
                {attraction.name}
            </Text>
            <View style={styles.cityContainer}>
                <Image
                    style={styles.icon}
                    source={require("../../../assets/icons/location.png")}
                />
                <Text style={styles.city}>{attraction.city}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default AttractionCard;
