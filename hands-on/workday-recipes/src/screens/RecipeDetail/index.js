import React from "react";
import {
    SafeAreaView,
    Image,
    View,
    Text,
    StyleSheet,
    ScrollView,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import FullScreenLoading from "../../components/FullScreenLoading";
import { useRecipeInfo } from "../../hooks/useRecipeInfo";
import { getStyles } from "./styles";

function RecipeDetail({ route }) {
    const { id } = route.params;
    const navigation = useNavigation();
    const theme = useTheme();
    const { isLoading, recipe } = useRecipeInfo(id);

    if (isLoading || !recipe) return <FullScreenLoading />;

    const styles = StyleSheet.create(getStyles(theme));
    const nutrition = recipe.nutrition;
    delete nutrition.updated_at;
    const nutritionKeys = Object.keys(recipe.nutrition);

    return (
        <SafeAreaView style={styles.screenContainer}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <Image
                    style={styles.image}
                    source={{ uri: recipe.thumbnail_url }}
                />

                <Text style={styles.name}>{recipe.name}</Text>

                <View style={styles.nutritionList}>
                    {nutritionKeys.map((key, index) => (
                        <View style={styles.nutritionItem} key={index}>
                            <Text style={styles.nutritionLabel}>{key}</Text>
                            <Text style={styles.nutritionValue}>
                                {nutrition[key]}
                            </Text>
                        </View>
                    ))}
                </View>
                <View style={styles.instructionsList}>
                    <Text style={styles.sectionTitle}>Instructions</Text>
                    {recipe.instructions.map((item, index) => (
                        <View style={styles.instructionItem} key={index}>
                            <Text style={styles.instructionPosition}>
                                {item.position}
                            </Text>
                            <Text style={styles.instructionText}>
                                {item.display_text}
                            </Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default RecipeDetail;
