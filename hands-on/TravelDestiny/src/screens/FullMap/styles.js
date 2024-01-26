import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const marginBox = 26;

const styles = StyleSheet.create({
    mapContainer: {
        position: "relative",
    },
    map: {
        width: "100%",
        height: "100%",
    },
    locationInfoBox: {
        minHeight: 86,
        width: width - marginBox * 2,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: 15,
        position: "absolute",
        top: 72,
        zIndex: 1,
        margin: marginBox,
        paddingLeft: 72,
        paddingRight: 16,
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
    },
    description: {
        fontSize: 18,
    },
});

export default styles;
