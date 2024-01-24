import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
    image: {
        borderRadius: 20,
    },
    container: {
        marginHorizontal: 22,
        marginTop: 48,
    },
    viewImage: {
        width: "100%",
        height: height / 2,
        borderRadius: 20,
    },
});

export default styles;
