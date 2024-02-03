import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const getStyles = (theme) => ({
    card: {
        width: width * 0.6,
        minHeight: 92,
        borderRadius: 10,
        marginRight: 16,
        marginVertical: 36,
        padding: 10,
        gap: 8,
        backgroundColor: theme.custom.white,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    topRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    recipeNameView: {
        flex: 1,
        gap: 8,
    },
    recipeName: {
        fontSize: 16,
        fontWeight: "600",
    },
    recipeImage: {
        marginTop: -36,
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    ratingView: {
        flexDirection: "row",
    },
    starIcon: {
        width: 16,
        height: 16,
    },
    bottomRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 40,
    },
    authorView: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        gap: 8,
    },
    authorAvatar: {
        width: 36,
        height: 36,
        borderRadius: 50,
    },
    timeView: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    timeIcon: {
        width: 20,
        height: 20,
    },
    greyText: {
        fontSize: 14,
        color: theme.custom.grey300,
    },
});
