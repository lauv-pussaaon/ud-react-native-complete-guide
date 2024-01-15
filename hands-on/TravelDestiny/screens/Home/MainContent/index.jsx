import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import CategoryOptions from "../CategoryOptions";

function MainContent() {
    const categories = ["All", "Popular", "Top Rated", "Featured", "Luxury"];
    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Explore Attractions</Text>
            </View>
            <CategoryOptions
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
        </>
    );
}

export default MainContent;
