import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, FlatList } from "react-native";

import Search from "../../components/Search";
import FeaturedCard from "../../components/FeaturedCard";
import styles from "./styles";
import CategoryOptions from "../../components/CategoryOptions";
import categories_data from "../../data/categories.json";

function Home() {
    const [categories, setCategories] = useState(categories_data);
    const [selectedCategories, setSelectedCategories] = useState("All");

    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.searchView}>
                <Search />
            </View>
            <View style={styles.featuredSection}>
                <Text style={styles.sectionTitle}>Healthy Recipes</Text>
                <View style={styles.featuredList}>
                    {Array.from({ length: 5 }, (_, index) => (
                        <FeaturedCard key={index} />
                    ))}
                </View>
            </View>
            <View style={styles.categoryView}>
                <CategoryOptions
                    categories={categories}
                    selectedCategory={selectedCategories}
                    setSelectedCategory={setSelectedCategories}
                />
            </View>
            <View>
                <Text>Recipes List</Text>
            </View>
        </SafeAreaView>
    );
}

export default Home;
