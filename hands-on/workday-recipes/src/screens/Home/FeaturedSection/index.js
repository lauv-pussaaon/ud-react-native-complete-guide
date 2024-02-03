import React from "react";
import { View, Text, FlatList } from "react-native";
import FeaturedCard from "../../../components/FeaturedCard";
import styles from "./styles";
function FeaturedSection({ recipes }) {
    return (
        <>
            <View style={styles.listView}>
                <FlatList
                    data={recipes?.results.slice(0, 15)}
                    keyExtractor={(item) => String(item.id)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <FeaturedCard
                                key={item.id}
                                recipeName={item.name}
                                recipeImageUrl={item.thumbnail_url}
                                rating={item.user_ratings?.score}
                                authorName={item.credits?.at(0)?.name}
                                authorImageUrl={item.credits?.at(0)?.image_url}
                                prepMinutes={item.prep_time_minutes}
                                customStyle={
                                    index === 0 ? { marginLeft: 24 } : {}
                                }
                            />
                        );
                    }}
                />
            </View>
        </>
    );
}

export default FeaturedSection;
