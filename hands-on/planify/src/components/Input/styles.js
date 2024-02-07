import { StyleSheet } from "react-native";
import GlobalStyles from "../../constants/GlobalStyles";

const styles = StyleSheet.create({
    input: {
        width: "100%",
        height: 48,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
        color: "black",
        fontSize: 16,
        backgroundColor: GlobalStyles.colors.grey200,
    },
});

export default styles;
