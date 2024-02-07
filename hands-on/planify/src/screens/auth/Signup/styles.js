import GlobalStyles from "../../../constants/GlobalStyles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 36,
        gap: 24,
        marginBottom: 24,
    },
    consentView: {
        flexDirection: "row",
        gap: 16,
        alignItems: "center",
    },
    consentText: {
        color: GlobalStyles.colors.grey400,
        fontSize: 14,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 8,
        marginTop: 36,
    },
    footerText: {
        fontSize: 16,
        color: GlobalStyles.colors.grey400,
    },
});

export default styles;
