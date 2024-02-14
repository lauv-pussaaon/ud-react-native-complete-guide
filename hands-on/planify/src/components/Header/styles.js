import { StyleSheet } from "react-native";
import GlobalStyles from "../../constants/GlobalStyles";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 16,
        color: GlobalStyles.colors.secondary,
        fontWeight: GlobalStyles.weights.semiBold,
    },
    spacer: {
        margin: 20,
    },
    leftButton: {
        paddingLeft: 24,
        marginLeft: -24,
    },
    buttonIcon: {
        width: 32,
        height: 32,
    },
});

export default styles;
