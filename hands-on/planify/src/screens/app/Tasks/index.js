import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Header from "../../../components/Header";
import FloatingAction from "../../../components/FloatingAction";

function Tasks() {
    return (
        <SafeAreaView>
            <Header title="Tasks" />
            <ScrollView></ScrollView>
            <FloatingAction />
        </SafeAreaView>
    );
}

export default Tasks;
