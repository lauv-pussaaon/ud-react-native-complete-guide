import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    detailContainer: {
        flexDirection: "column",
        gap: 24,
        marginTop: 48,
    },
    titleRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    infoContainer: {},
    title: {
        fontSize: 32,
        fontWeight: "700",
    },
    city: {
        fontSize: 20,
        fontWeight: "500",
        marginTop: 8,
    },
    infoRow: {
        flexDirection: "row",
        paddingRight: 48,
        alignItems: "center",
    },
    infoIcon: {
        width: 42,
        height: 42,
    },
    infoText: {
        fontSize: 13,
    },
});

export default styles;
