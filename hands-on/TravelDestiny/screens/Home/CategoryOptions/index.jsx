import React from "react";
import { FlatList, View, Text } from "react-native";
import styles from "./styles";

function CategoryOptions({ categories, selectedCategory }) {
    return (
        <FlatList
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={categories}
            renderItem={({ item }) => {
                const isSelected = item === selectedCategory;
                return (
                    <View
                        style={[
                            styles.optionContainer,
                            isSelected ? styles.selectedOptionContainer : {},
                        ]}>
                        <Text
                            style={[
                                styles.optionText,
                                isSelected ? styles.selectedOptionText : {},
                            ]}>
                            {item}
                        </Text>
                    </View>
                );
            }}></FlatList>
    );
}

export default CategoryOptions;
