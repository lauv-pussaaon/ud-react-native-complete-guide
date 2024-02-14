import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

function Header({ title, screenMode = "tab" }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Pressable
                onPress={
                    screenMode === "tab"
                        ? navigation.openDrawer
                        : navigation.goBack
                }
                hitSlop={8}
                style={styles.leftButton}>
                <Image
                    style={styles.buttonIcon}
                    source={
                        screenMode === "tab"
                            ? require("../../assets/icons/hamburger.png")
                            : require("../../assets/icons/back.png")
                    }
                />
            </Pressable>
            {screenMode === "tab" && (
                <Text style={styles.headerTitle}>{title}</Text>
            )}
            <View style={styles.spacer} />
        </View>
    );
}

export default React.memo(Header);
