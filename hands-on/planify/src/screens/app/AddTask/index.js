import React from "react";
import { SafeAreaView, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../../../constants/GlobalStyles";
import styles from "./styles";

function AddTask() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={GlobalStyles.screenContainer}>
            <Pressable
                onPress={() => navigation.goBack()}
                style={styles.backButton}>
                <Image
                    source={require("../../../assets/icons/back.png")}
                    style={styles.backIcon}
                />
            </Pressable>
            <Text>Add Task</Text>
        </SafeAreaView>
    );
}

export default AddTask;
