import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mapContainer: {
        position: "relative",
    },
    map: {
        width: "100%",
        height: "100%",
    },
    locationInfoBox: {
        height: 100,
        position: "absolute",
        top: 50,
        zIndex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles;
