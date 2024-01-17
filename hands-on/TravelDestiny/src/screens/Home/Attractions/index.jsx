import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import AttractionCard from "../AttractionCard";
import attractions_data from "../../../data/attractions.json";

function Attractions({ headerComponents, selectedCategory }) {
    const [attractions, setAttractions] = useState([]);

    useEffect(() => {
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
            <FlatList
                data={attractions}
                renderItem={({ item, index }) => (
                    <AttractionCard attraction={item} index={index} />
                )}
                keyExtractor={item => String(item.id)}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={headerComponents}
            />
        </>
    );
}

export default Attractions;
