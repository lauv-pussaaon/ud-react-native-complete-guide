import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

function index() {
    return (<View style={styles.headlineContainer}>
        <Text style={styles.headline}>Where do</Text>
        <Text style={[styles.headline, styles.textBold]}>you want to go?</Text>
    </View>);
}

export default index
