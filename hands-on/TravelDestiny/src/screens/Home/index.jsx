import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Headline from "./Headline";
import Attractions from "./Attractions";
import styles from "./styles";

function Home() {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Headline />
                <Attractions />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;
