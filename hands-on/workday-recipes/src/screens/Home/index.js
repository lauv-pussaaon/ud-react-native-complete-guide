import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, FlatList } from "react-native";

import Search from "../../components/Search";
import FeaturedCard from "../../components/FeaturedCard";
import styles from "./styles";
import CategoryOptions from "../../components/CategoryOptions";
import categories_data from "../../data/categories.json";
import RecipeCard from "../../components/RecipeCard";

function Home() {
    const [categories, setCategories] = useState(categories_data);
    const [selectedCategories, setSelectedCategories] = useState("All");

    function customLeftMargin(index) {
        return { customStyle: index === 0 ? { marginLeft: 24 } : {} };
    }

    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.searchView}>
                <Search />
            </View>
            <Text style={styles.sectionTitle}>Healthy Recipes</Text>
            <View style={styles.listView}>
                <FlatList
                    data={[1, 2, 3, 4, 5]}
                    keyExtractor={(item) => String(item)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        const lastItem = index == 4;
                        return (
                            <FeaturedCard
                                key={index}
                                {...customLeftMargin(index)}
                            />
                        );
                    }}
                />
            </View>
            <View style={styles.listView}>
                <CategoryOptions
                    categories={categories}
                    selectedCategory={selectedCategories}
                    setSelectedCategory={setSelectedCategories}
                />
            </View>
            <View style={styles.listView}>
                <FlatList
                    data={[1, 2, 3, 4, 5]}
                    keyExtractor={(item) => String(item)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <RecipeCard key={index} {...customLeftMargin(index)} />
                    )}
                />
            </View>
        </SafeAreaView>
    );
}

export default Home;
