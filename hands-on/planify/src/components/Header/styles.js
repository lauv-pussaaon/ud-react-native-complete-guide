import { StyleSheet } from "react-native";
import GlobalStyles from "../../constants/GlobalStyles";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 16,
        color: GlobalStyles.colors.secondary,
        fontWeight: GlobalStyles.weights.semiBold,
    },
    spacer: {
        margin: 10,
    },
});

export default styles;
