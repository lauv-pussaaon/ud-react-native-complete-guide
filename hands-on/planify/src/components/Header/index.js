import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";
import GlobalStyles from "../../constants/GlobalStyles";
import { useNavigation } from "@react-navigation/native";

function Header({ title }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.openDrawer()} hitSlop={8}>
                <Image
                    style={GlobalStyles.tabIcon}
                    source={require("../../assets/icons/hamburger.png")}
                />
            </Pressable>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.spacer} />
        </View>
    );
}

export default React.memo(Header);
