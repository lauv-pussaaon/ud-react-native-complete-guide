import React from "react";
import { Text, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

function Header() {
    const navigation = useNavigation();

    return (
        <Pressable
            style={styles.container}
            onPress={() => navigation.navigate("AddTask")}
            hitSlop={8}>
            <Text style={styles.plus}>+</Text>
        </Pressable>
    );
}

export default React.memo(Header);
