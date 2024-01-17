import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import CategoryOptions from "./CategoryOptions";
import Attractions from "./Attractions";
import styles from "./styles";
import categories_data from "../../data/categories.json";

function Home() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = ["All", ...categories_data];

    const headerComponents = (
        <>
            <View style={[styles.headlineContainer, styles.containerMarginX]}>
                <Text style={styles.headline}>Where do</Text>
                <Text style={[styles.headline, styles.textBold]}>
                    you want to go?
                </Text>
            </View>
            <View style={[styles.titleContainer, styles.containerMarginX]}>
                <Text style={styles.title}>Explore Attractions</Text>
            </View>
            <CategoryOptions
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
        </>
    );

    return (
        <SafeAreaView>
            <Attractions
                headerComponents={headerComponents}
                selectedCategory={selectedCategory}
            />
        </SafeAreaView>
    );
}

export default Home;
