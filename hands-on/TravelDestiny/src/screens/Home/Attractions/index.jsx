import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import AttractionCard from "../AttractionCard";
import attractions_data from "../../../data/attractions.json";
import { useNavigation } from "@react-navigation/native";

function Attractions({ headerComponents, selectedCategory }) {
    const [attractions, setAttractions] = useState([]);
    const navigation = useNavigation();

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
                style={{ height: "100%" }}
                renderItem={({ item, index }) => (
                    <AttractionCard
                        attraction={item}
                        index={index}
                        onPress={() =>
                            navigation.navigate("AttractionDetail", { item })
                        }
                    />
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
