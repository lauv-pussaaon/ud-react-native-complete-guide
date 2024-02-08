import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Header from "../../../components/Header";
import FloatingAction from "../../../components/FloatingAction";
import GlobalStyles from "../../../constants/GlobalStyles";

function Home() {
    return (
        <SafeAreaView style={GlobalStyles.screenContainer}>
            <Header title="Home" />
            <ScrollView></ScrollView>
            <FloatingAction />
        </SafeAreaView>
    );
}

export default Home;
