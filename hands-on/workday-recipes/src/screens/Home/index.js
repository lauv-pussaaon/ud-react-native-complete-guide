import React from "react";
import { SafeAreaView, View, Text } from "react-native";

import Search from "../../components/Search";
import styles from "./styles";
import FullScreenLoading from "../../components/FullScreenLoading";
import { useRecipes } from "../../hooks/useRecipes";
import { useTags } from "../../hooks/useTags";
import FeaturedSection from "./FeaturedSection";
import TagsSection from "./TagsSection";
import RecipesSection from "./RecipesSection";

function Home() {
    const {
        isLoading,
        recipes,
        selectedTag,
        handleSelectTag: setRecipeTag,
    } = useRecipes("healthy");

    const { isLoading: isLoadingFeatured, recipes: recipesFeatured } =
        useRecipes("breakfast");

    const { isLoading: isLoadingTags, tags } = useTags("healthy");

    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.searchView}>
                <Search
                    openScreen={"SearchRecipe"}
                    placeholder={"Search Recipes"}
                    editable={false}
                />
            </View>
            <Text style={styles.sectionTitle}>Breakfast Recipes</Text>
            <FeaturedSection recipes={recipesFeatured} />
            <Text style={styles.sectionTitle}>Healthy Recipes</Text>
            <TagsSection
                tags={tags}
                selectedTag={selectedTag}
                handleSelectTag={setRecipeTag}
            />
            <RecipesSection recipes={recipes} />
            <FullScreenLoading
                isVisible={isLoading || isLoadingFeatured || isLoadingTags}
            />
        </SafeAreaView>
    );
}

export default Home;
