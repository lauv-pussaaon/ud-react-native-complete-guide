import React from "react";
import { SafeAreaView, FlatList, View } from "react-native";
import Search from "../../components/Search";
import { useSearchRecipes } from "../../hooks/useSearchRecipes";
import FullScreenLoading from "../../components/FullScreenLoading";
import RecipeCard from "../../components/RecipeCard";
import styles from "./styles";

function SearchRecipe() {
    const { isLoading, recipes, term, setTerm } = useSearchRecipes();

    return (
        <SafeAreaView style={styles.screenContainer}>
            <Search
                autoFocus
                onChangeText={(value) => setTerm(value)}
                value={term}
            />
            <View style={styles.resultView}>
                <FlatList
                    data={recipes?.results?.slice(0, 15)}
                    keyExtractor={(item) => String(item.id)}
                    numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContainer}
                    renderItem={({ item }) => {
                        return (
                            <RecipeCard
                                key={item.id}
                                recipeName={item.name}
                                recipeImageUrl={item.thumbnail_url}
                                prepMinutes={item.prep_time_minutes}
                            />
                        );
                    }}
                />
            </View>
            <FullScreenLoading isVisible={isLoading} />
        </SafeAreaView>
    );
}

export default SearchRecipe;
