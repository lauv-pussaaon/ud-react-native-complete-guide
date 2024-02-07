import { StyleSheet } from "react-native";
import GlobalStyles from "../../../constants/GlobalStyles";

const styles = StyleSheet.create({
    imageContainer: {
        width: "100%",
        flex: 1,
    },
    image: {
        width: "100%",
        height: "70%",
    },
    signInPanel: {
        minHeight: 323,
        width: "100%",
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
        backgroundColor: "white",
        position: "absolute",
        bottom: 0,
        paddingHorizontal: 48,
        paddingTop: 48,
        paddingBottom: 36,
        gap: 16,
        alignItems: "center",
    },
    subTitle: {
        fontSize: 18,
        color: GlobalStyles.colors.grey400,
        marginBottom: 16,
        textAlign: "center",
    },
});

export default styles;
