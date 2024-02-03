import React from "react";
import { View, Image, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

function Search({ openScreen, ...props }) {
    const navigation = useNavigation();

    function handlePress() {
        if (openScreen) {
            navigation.navigate(openScreen);
        }
    }

    return (
        <Pressable onPress={handlePress}>
            <View style={styles.searchBox}>
                <Image
                    source={require("../../../assets/icons/search.png")}
                    style={styles.searchIcon}
                />
                <TextInput
                    style={styles.placeholderColor}
                    {...props}
                ></TextInput>
            </View>
        </Pressable>
    );
}

export default Search;
