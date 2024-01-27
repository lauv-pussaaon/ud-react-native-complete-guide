import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        width: "75%",
        minWidth: 251,
        minHeight: 92,
        borderRadius: 10,
        marginTop: 32,
        padding: 10,
        gap: 4,
        backgroundColor: "white",

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
    },
    authorView: {
        flexDirection: "row",
        alignItems: "center",
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
        color: "hsla(0, 0%, 66%, 1)",
    },
});

export default styles;
