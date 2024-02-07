import GlobalStyles from "../../../constants/GlobalStyles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 36,
        gap: 24,
        marginBottom: 48,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 8,
        marginTop: 26,
    },
    footerText: {
        fontSize: 16,
        color: GlobalStyles.colors.grey400,
    },
});

export default styles;
