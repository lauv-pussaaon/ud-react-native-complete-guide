import React from "react";
import { View, FlatList } from "react-native";

import styles from "./styles";
import RecipeCard from "../../../components/RecipeCard";

function RecipesSection({ recipes }) {
    return (
        <View style={styles.listView}>
            <FlatList
                data={recipes?.results.slice(0, 15)}
                keyExtractor={(item) => String(item.id)}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <RecipeCard
                            key={item.id}
                            recipeName={item.name}
                            recipeImageUrl={item.thumbnail_url}
                            prepMinutes={item.prep_time_minutes}
                            customStyle={index === 0 ? { marginLeft: 24 } : {}}
                        />
                    );
                }}
            />
        </View>
    );
}

export default RecipesSection;
