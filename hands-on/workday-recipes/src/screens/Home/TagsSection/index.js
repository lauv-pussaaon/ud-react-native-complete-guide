import React from "react";
import { View } from "react-native";
import styles from "./styles";
import CategoryOptions from "../../../components/CategoryOptions";

function TagsSection({ tags, selectedTag, handleSelectTag }) {
    return (
        <View style={styles.listView}>
            <CategoryOptions
                categories={tags}
                selectedCategory={selectedTag || "all"}
                setSelectedCategory={handleSelectTag}
            />
        </View>
    );
}

export default TagsSection;
