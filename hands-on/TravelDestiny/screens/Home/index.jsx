import React from "react";
import { SafeAreaView } from "react-native";
import Headline from "./Headline";
import MainContent from "./MainContent";
import styles from "./styles";

function Home() {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <Headline />
            <MainContent />
        </SafeAreaView>
    );
}

export default Home;
