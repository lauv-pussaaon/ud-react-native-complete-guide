import React from "react";
import { SafeAreaView, View } from "react-native";
import GlobalStyles from "../../../constants/GlobalStyles";
import TitleLight from "../../../components/TitleLight";
import Header from "../../../components/Header";
import styles from "./styles";

function AddTask() {
    return (
        <SafeAreaView style={GlobalStyles.screenContainerWithNotch}>
            <Header screenMode="stack" />
            <View style={GlobalStyles.contentContainer}>
                <TitleLight>Add New Task</TitleLight>
            </View>
        </SafeAreaView>
    );
}

export default AddTask;
