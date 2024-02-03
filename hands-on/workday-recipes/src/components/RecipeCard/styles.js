import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const getStyles = (theme) => ({
    card: {
        width: width * 0.4,
        minHeight: 231,
        borderRadius: 14,
        marginRight: 16,
        marginTop: 64,
        padding: 16,
        gap: 16,
        backgroundColor: theme.custom.grey400,
        alignItems: "center",
    },
    recipeImage: {
        marginTop: "-50%",
        width: 115,
        height: 115,
        borderRadius: 50,
    },
    recipeName: {
        fontSize: 18,
        textAlign: "center",
        lineHeight: 24,
        fontWeight: "600",
        color: theme.custom.dark700,
    },
    timeView: {
        flexDirection: "column",
        flex: 1,
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        gap: 8,
    },
    timeLabel: {
        fontSize: 12,
        color: theme.custom.grey300,
    },
    timeValue: {
        fontSize: 14,
        fontWeight: "600",
        color: theme.custom.dark700,
    },
});
