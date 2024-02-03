import { StyleSheet } from "react-native";

const getStyles = (theme) => ({
    container: {
        marginVertical: 16,
        paddingLeft: 24,
    },
    optionContainer: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        justifyContent: "center",
    },
    optionText: {
        color: theme.custom.green400,
        fontSize: 16,
        fontWeight: "600",
    },

    selectedOptionContainer: {
        backgroundColor: theme.custom.green600,
        borderRadius: 10,
    },
    selectedOptionText: {
        color: theme.custom.white,
        fontWeight: "700",
    },
});

export { getStyles };
