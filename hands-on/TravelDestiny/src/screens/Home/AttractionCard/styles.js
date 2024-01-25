import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "40%",
        padding: 4,
        borderWidth: 1,
        borderColor: "hsla(0, 0%, 89% / 1)",
        borderRadius: 16,
        marginBottom: 12,
    },
    image: {
        width: "100%",
        height: 120,
        borderRadius: 16,
    },
    name: {
        fontSize: 14,
        fontWeight: "600",
        marginTop: 12,
        marginLeft: 6,
    },
    cityContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        marginTop: 4,
        marginLeft: 6,
        marginBottom: 12,
    },
    city: {
        fontSize: 12,
        fontWeight: "300",
        color: "hsla(0 0% 0% / 0.8)",
    },
    icon: {
        width: 10,
        height: 10,
    },
});

export default styles;
