import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Header from "../../../components/Header";
import FloatingAction from "../../../components/FloatingAction";
import GlobalStyles from "../../../constants/GlobalStyles";
import TitleLight from "../../../components/TitleLight";

function Tasks() {
    return (
        <SafeAreaView style={GlobalStyles.screenContainerWithNotch}>
            <Header title="Tasks" screenMode="tab" />
            <ScrollView style={GlobalStyles.contentContainer}>
                <TitleLight>To Do Tasks</TitleLight>
            </ScrollView>
            <FloatingAction />
        </SafeAreaView>
    );
}

export default Tasks;
