import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Header from "../../../components/Header";
import FloatingAction from "../../../components/FloatingAction";
import GlobalStyles from "../../../constants/GlobalStyles";
import TitleLight from "../../../components/TitleLight";

function Home() {
    return (
        <SafeAreaView style={GlobalStyles.screenContainerWithNotch}>
            <Header title="Home" screenMode="tab" />
            <ScrollView style={GlobalStyles.contentContainer}>
                <TitleLight>Daily Tasks</TitleLight>
            </ScrollView>
            <FloatingAction />
        </SafeAreaView>
    );
}

export default Home;
