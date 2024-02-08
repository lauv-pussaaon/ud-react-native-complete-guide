import { StyleSheet } from "react-native";
import GlobalStyles from "../../constants/GlobalStyles";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        width: 60,
        height: 60,
        backgroundColor: GlobalStyles.colors.primary,
        position: "absolute",
        bottom: 24,
        right: 0,
    },
    plus: {
        fontSize: 32,
        marginTop: -2,
        color: GlobalStyles.colors.white,
        fontWeight: GlobalStyles.weights.semiBold,
    },
});

export default styles;
