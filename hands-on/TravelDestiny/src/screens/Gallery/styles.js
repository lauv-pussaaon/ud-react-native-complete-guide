import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 22,
        marginTop: 32,
    },
    backButton: {
        width: 36,
        height: 36,
    },
    backButtonContainer: {
        position: "absolute",
        left: 10,
        top: 22,
        zIndex: 1,
        opacity: 0.85,
    },
    image: {
        width: "100%",
        minHeight: 360,
        borderRadius: 20,
        marginBottom: 24,
    },
});

export default styles;
