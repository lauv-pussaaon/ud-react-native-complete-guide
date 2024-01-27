import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

function Search() {
    return (
        <View style={styles.searchBox}>
            <Image
                source={require("../../../assets/icons/search.png")}
                style={styles.searchIcon}
            />
            <Text style={styles.placeholderColor}>Search</Text>
        </View>
    );
}

export default Search;
