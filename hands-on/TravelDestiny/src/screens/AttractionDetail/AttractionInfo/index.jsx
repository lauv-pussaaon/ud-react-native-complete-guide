import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";

function AttractionInfo({ attraction }) {
    return (
        <View style={styles.detailContainer}>
            <View style={styles.titleRow}>
                <View>
                    <Text style={styles.title}>{attraction.name}</Text>
                    <Text style={styles.city}>{attraction.city}</Text>
                </View>
                <Text style={styles.title}>$20</Text>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.infoRow}>
                    <Image
                        source={require("../../../assets/icons/location-circle.png")}
                        style={styles.infoIcon}
                    />
                    <Text style={styles.infoText}>
                        Address: {attraction.address}
                    </Text>
                </View>
                <View style={styles.infoRow}>
                    <Image
                        source={require("../../../assets/icons/time-circle.png")}
                        style={styles.infoIcon}
                    />
                    <Text style={styles.infoText}>
                        Open: {attraction.opening_time}
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default AttractionInfo;
