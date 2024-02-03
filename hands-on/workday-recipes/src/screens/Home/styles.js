import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screenContainer: {
        marginHorizontal: 24,
    },
    searchView: {
        marginTop: 20,
    },
    listView: {
        marginHorizontal: -24,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginTop: 24,
    },
    featuredList: {
        flexDirection: "row",
        gap: 16,
    },
    recipeList: {
        flexDirection: "row",
        gap: 12,
    },
});

export default styles;
