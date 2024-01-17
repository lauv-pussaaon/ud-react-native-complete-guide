import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import CategoryOptions from "../CategoryOptions";
import AttractionCard from "../AttractionCard";
import attractions_data from "../../../data/attractions.json";
import categories_data from "../../../data/categories.json";

function Attractions() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [attractions, setAttractions] = useState([]);
    const categories = ["All", ...categories_data];

    useEffect(() => {
        console.log(selectedCategory);
        if (selectedCategory === "All") {
            setAttractions(attractions_data);
            return;
        }
        const filteredAttractions = attractions_data.filter(attraction =>
            attraction.categories.includes(selectedCategory),
        );
        setAttractions(filteredAttractions);
    }, [selectedCategory]);

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
