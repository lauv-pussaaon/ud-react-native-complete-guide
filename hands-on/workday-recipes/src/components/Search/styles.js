import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    searchBox: {
        width: "100%",
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        height: 40,
        borderColor: "hsla(0, 0%, 85%, 1)",
        borderWidth: 1,
        borderRadius: 10,
    },
    searchIcon: {
        width: 18,
        height: 18,
    },
});

export default styles;
