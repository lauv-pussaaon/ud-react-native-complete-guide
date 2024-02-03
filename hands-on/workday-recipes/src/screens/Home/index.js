import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, FlatList } from "react-native";

import Search from "../../components/Search";
import FeaturedCard from "../../components/FeaturedCard";
import styles from "./styles";
import CategoryOptions from "../../components/CategoryOptions";
import categories_data from "../../data/categories.json";
import RecipeCard from "../../components/RecipeCard";
import FullScreenLoading from "../../components/FullScreenLoading";
import { useRecipes } from "../../hooks/useRecipes";

function Home() {
    const [categories, setCategories] = useState(categories_data);
    const [selectedCategories, setSelectedCategories] = useState("All");
    const { isLoading, recipes } = useRecipes();
    const { isLoading: isLoadingHealthy, recipes: recipesHealthy } =
        useRecipes("healthy");

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
                    data={recipesHealthy?.results.slice(0, 15)}
                    keyExtractor={(item) => String(item)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <FeaturedCard
                            key={index}
                            recipeName={item.name}
                            recipeImageUrl={item.thumbnail_url}
                            rating={item.user_ratings?.score}
                            authorName={item.credits?.at(0)?.name}
                            authorImageUrl={item.credits?.at(0)?.image_url}
                            prepMinutes={item.prep_time_minutes}
                            {...customLeftMargin(index)}
                        />
                    )}
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
                    data={recipes?.results.slice(0, 15)}
                    keyExtractor={(item) => String(item)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <RecipeCard key={index} {...customLeftMargin(index)} />
                    )}
                />
            </View>
            <FullScreenLoading isVisible={isLoading || isLoadingHealthy} />
        </SafeAreaView>
    );
}

export default Home;
