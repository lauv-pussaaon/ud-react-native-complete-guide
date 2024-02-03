import React from "react";
import { View, Text, Image } from "react-native";
import { useTheme } from "@react-navigation/native";
import { getStyles } from "./styles";

function RecipeCard({ customStyle }) {
    const theme = useTheme();
    const styles = getStyles(theme);

    return (
        <View style={[styles.card, customStyle]}>
            <Image
                style={styles.recipeImage}
                source={require("../../../assets/recipe-sample.png")}
            />
            <Text numberOfLines={2} style={styles.recipeName}>
                Steak with tomato with hot salsa sause.
            </Text>
            <View style={styles.timeView}>
                <Text style={styles.timeLabel}>Time</Text>
                <Text style={styles.timeValue}>15 Mins</Text>
            </View>
        </View>
    );
}

export default RecipeCard;
