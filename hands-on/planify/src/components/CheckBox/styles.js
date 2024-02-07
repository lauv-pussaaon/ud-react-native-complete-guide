import { StyleSheet } from "react-native";
import GlobalStyles from "../../constants/GlobalStyles";

const styles = StyleSheet.create({
    checkbox: {
        borderWidth: 1,
        borderColor: GlobalStyles.colors.secondary,
        borderRadius: 3,
        height: 18,
        width: 18,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 2,
    },
    innerBox: {
        width: 10,
        height: 10,
        backgroundColor: GlobalStyles.colors.secondary,
    },
    checked: {
        borderWidth: 2,
    },
});

export default styles;
