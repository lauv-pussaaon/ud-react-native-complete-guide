import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 22,
        marginTop: 32,
    },
    mainImageContainer: {
        width: "100%",
        height: height / 2,
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    mainImage: {
        borderRadius: 20,
    },
    navBar: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
    },
    icon: {
        width: 36,
        height: 36,
        margin: 16,
    },
    thumbnailListContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alighItems: "center",
        borderRadius: 15,
        backgroundColor: "rgba(256, 256, 256, 0.35)",
        margin: 16,
        paddingHorizontal: 16,
    },
    thumbnail: {
        width: 40,
        height: 40,
        margin: 4,
        borderRadius: 10,
    },
    moreImageContainer: {
        backgroundColor: "rgba(0, 0, 0, 0.38)",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
    },
    moreImageCount: {
        fontSize: 20,
        color: "white",
    },
});

export default styles;
