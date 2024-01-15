import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "47%",
        padding: 4,
        borderWidth: 1,
        borderColor: "hsla(0, 0%, 89% / 1)",
        borderRadius: 16,
    },
    image: {
        width: "100%",
        height: 120,
        borderRadius: 16,
    },
    name: {
        fontSize: 12,
        fontWeight: "600",
        marginTop: 12,
        marginLeft: 6,
    },
    locationContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        marginTop: 4,
        marginLeft: 6,
        marginBottom: 12,
    },
    icon: {
        width: 10,
        height: 10,
    },
    location: {
        fontSize: 10,
        fontWeight: "300",
        color: "hsla(0 0% 0% / 0.5)",
    },
});

export default styles;
