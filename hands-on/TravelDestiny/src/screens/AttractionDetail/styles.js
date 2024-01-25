import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 22,
        marginTop: 32,
    },
    viewImage: {
        width: "100%",
        height: height / 2,
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    image: {
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
    thumbnailsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alighItems: "center",
        borderRadius: 15,
        backgroundColor: `rgba(256, 256, 256, 0.35)`,
        margin: 16,
        paddingHorizontal: 16,
    },
    thumbnail: {
        width: 40,
        height: 40,
        margin: 4,
        borderRadius: 10,
    },
});

export default styles;
