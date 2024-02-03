import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import { getStyles } from "./styles";

function RecipeCard({
    recipeId,
    recipeName,
    recipeImageUrl,
    prepMinutes,
    customStyle,
}) {
    const theme = useTheme();
    const styles = getStyles(theme);
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate("RecipeDetail", { id: recipeId })
            }
        >
            <View style={[styles.card, customStyle]}>
                <Image
                    style={styles.recipeImage}
                    source={
                        recipeImageUrl
                            ? { uri: recipeImageUrl }
                            : require("../../../assets/workday-recipes-logo.png")
                    }
                />
                <Text numberOfLines={3} style={styles.recipeName}>
                    {recipeName}
                </Text>
                <View style={styles.timeView}>
                    <Text style={styles.timeLabel}>Time</Text>
                    <Text style={styles.timeValue}>
                        {prepMinutes || "--"} Mins
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default RecipeCard;
