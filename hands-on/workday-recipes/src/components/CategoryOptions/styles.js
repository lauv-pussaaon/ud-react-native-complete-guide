import { StyleSheet } from "react-native";

const getStyles = (theme) => ({
    container: {
        marginVertical: 16,
        marginHorizontal: -24,
        paddingLeft: 24,
        paddingRight: 64,
    },
    optionContainer: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        justifyContent: "center",
        borderRadius: 10,
    },
    optionText: {
        color: theme.custom.green400,
        fontSize: 16,
        fontWeight: "600",
    },

    selectedOptionContainer: {
        borderBottomWidth: 1,
        backgroundColor: theme.custom.green600,
    },
    selectedOptionText: {
        color: theme.custom.white,
        fontWeight: "700",
    },
});

export { getStyles };
