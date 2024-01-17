import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        paddingLeft: 32,
    },
    optionContainer: {
        paddingBottom: 2,
        marginRight: 16,
    },
    selectedOptionContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "hsla(202, 40%, 46%, 1)",
    },
    optionText: {
        color: "hsla(0, 0%, 0%, 0.5)",
        fontSize: 14,
    },
    selectedOptionText: {
        color: "#000",
        fontWeight: "600",
    },
});

export default styles;
