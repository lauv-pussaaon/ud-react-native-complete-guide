import React from "react";
import {
    FlatList,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { getStyles } from "./styles";

function CategoryOptions({
    categories,
    selectedCategory,
    setSelectedCategory,
}) {
    const theme = useTheme();
    const styles = StyleSheet.create(getStyles(theme));

    return (
        <FlatList
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={(item) => String(item)}
            data={categories}
            renderItem={({ item, index }) => {
                const isSelected = item === selectedCategory;
                const lastItem = index === categories.length - 1;
                return (
                    <TouchableOpacity
                        onPress={() => setSelectedCategory(item)}
                        key={index}
                    >
                        <View
                            style={[
                                styles.optionContainer,
                                isSelected
                                    ? styles.selectedOptionContainer
                                    : {},
                                lastItem ? { marginRight: 24 } : {},
                            ]}
                        >
                            <Text
                                style={[
                                    styles.optionText,
                                    isSelected ? styles.selectedOptionText : {},
                                ]}
                            >
                                {item}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            }}
        ></FlatList>
    );
}

export default CategoryOptions;
