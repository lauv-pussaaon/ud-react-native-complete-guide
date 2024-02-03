import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

function BackButton() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
                source={require("../../..//assets/icons/arrow-left-black.png")}
                style={styles.backIcon}
            />
        </TouchableOpacity>
    );
}

export default BackButton;

const styles = StyleSheet.create({
    backIcon: {
        width: 20,
        height: 20,
        marginLeft: 24,
    },
});
