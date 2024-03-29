import React from "react";
import { Image, View, Text } from "react-native";
import Button from "../../../components/Button";
import TitleBold from "../../../components/TitleBold";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

function OnBoarding() {
    const navigation = useNavigation();

    return (
        <>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../../../assets/splash-image.png")}
                    style={styles.image}></Image>
            </View>
            <View style={styles.signInPanel}>
                <TitleBold>Best task management app</TitleBold>
                <Text style={styles.subTitle}>
                    Get organized by sorting out all your tasks and boost your
                    productivity.
                </Text>
                <Button
                    type="secondary"
                    onPress={() => navigation.navigate("Signin")}>
                    Log in
                </Button>
                <Button
                    type="primary"
                    onPress={() => navigation.navigate("Signup")}>
                    Get started
                </Button>
            </View>
        </>
    );
}

export default OnBoarding;
