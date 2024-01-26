import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    ImageBackground,
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";

function Splash() {
    const navigation = useNavigation();

    return (
        <ImageBackground
            style={styles.screenContainer}
            imageStyle={styles.backgroundImage}
            source={require("../../../assets/splash.png")}
        >
            <View style={styles.logoView}>
                <Image
                    style={styles.logoImage}
                    source={require("../../../assets/logo.png")}
                />
                <Text style={styles.logoText}>100K+ Premium Recipe</Text>
            </View>
            <View style={styles.brandView}>
                <Text style={styles.brandName}>Get Cooking</Text>
                <Text style={styles.brandTagline}>
                    Simple way to find Tasty Recipe
                </Text>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Text style={styles.buttonText}>Start Cooking</Text>
                    <Image
                        style={styles.buttonIcon}
                        source={require("../../../assets/icons/arrow-right.png")}
                    />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

export default Splash;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
    },
    logoView: {
        marginTop: 128,
        alignItems: "center",
        gap: 14,
    },
    logoImage: {
        width: 79,
        height: 79,
    },
    logoText: {
        fontSize: 18,
        fontWeight: "600",
        color: "rgb(255, 255, 255)",
    },
    brandView: {
        marginHorizontal: 64,
        marginBottom: 120,
        alignItems: "center",
        gap: 20,
    },
    brandName: {
        fontSize: 56,
        fontWeight: "700",
        textAlign: "center",
        color: "rgb(255, 255, 255)",
    },
    brandTagline: {
        fontSize: 20,
        color: "hsla(255, 100%, 100%, 1)",
        marginBottom: 44,
    },
    buttonContainer: {
        minWidth: 240,
        height: 64,
        backgroundColor: "hsla(168, 79%, 33%, 1)",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "600",
        color: "hsla(255, 100%, 100%, 1)",
    },
    buttonIcon: {
        width: 20,
        height: 20,
        marginLeft: 16,
    },
});
