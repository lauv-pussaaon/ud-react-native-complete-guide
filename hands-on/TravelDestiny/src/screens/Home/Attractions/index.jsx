import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import CategoryOptions from "../CategoryOptions";
import AttractionCard from "../AttractionCard";
import attractions from "../../../data.json";

function Attractions() {
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
            <View style={styles.attractionListContainer}>
                {attractions.map(attraction => {
                    return (
                        <AttractionCard
                            attraction={attraction}
                            key={attraction.name}
                        />
                    );
                })}
            </View>
        </>
    );
}

export default Attractions;
