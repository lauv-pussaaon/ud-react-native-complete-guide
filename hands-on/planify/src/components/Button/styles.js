import { StyleSheet } from "react-native";
import GlobalStyles from "../../constants/GlobalStyles";

const styles = StyleSheet.create({
    button: {
        backgroundColor: "blue",
        width: "100%",
        height: 48,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    primaryButton: {
        backgroundColor: GlobalStyles.colors.primary,
    },
    secondaryButton: {
        backgroundColor: GlobalStyles.colors.secondary,
    },
    disabled: {
        opacity: 0.4,
    },
    text: {
        color: "#fff",
        fontWeight: GlobalStyles.weights.bold,
    },
});

export default styles;
