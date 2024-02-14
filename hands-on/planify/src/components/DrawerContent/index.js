import React from "react";
import { Text, StyleSheet, Linking } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import GlobalStyles from "../../constants/GlobalStyles";
import auth from "@react-native-firebase/auth";
import ExternalLinks from "../../constants/ExternalLinks";

function DrawerContent(props) {
    const { navigation } = props;

    function logout() {
        auth()
            .signOut()
            .then(() => console.log("signed out"));
    }

    return (
        <DrawerContentScrollView
            contentContainerStyle={styles.drawerContent}
            {...props}>
            <Text
                style={styles.link}
                onPress={() => navigation.navigate("Home")}>
                Home
            </Text>
            <Text
                style={styles.link}
                onPress={() => navigation.navigate("Tasks")}>
                Tasks
            </Text>
            <Text
                style={styles.link}
                onPress={() =>
                    Linking.openURL(ExternalLinks.PRIVACY_POLICY_LINK)
                }>
                Privacy Policy
            </Text>
            <Text
                style={styles.link}
                onPress={() =>
                    Linking.openURL(ExternalLinks.TERMS_CONDITIONS_LINK)
                }>
                Terms and Conditions
            </Text>
            <Text style={styles.link} onPress={logout}>
                Log out
            </Text>
        </DrawerContentScrollView>
    );
}

export default DrawerContent;

const styles = StyleSheet.create({
    link: {
        color: GlobalStyles.colors.black,
        fontWeight: GlobalStyles.weights.semiBold,
        fontSize: 16,
        marginHorizontal: 32,
    },
    drawerContent: {
        gap: 32,
    },
});
