import React from "react";
import { View, Text, Image } from "react-native";
import { useTheme } from "@react-navigation/native";

import { getStyles } from "./styles";

function FeaturedCard({ customStyle }) {
    const theme = useTheme();
    const styles = getStyles(theme);

    return (
        <View style={[styles.card, customStyle]}>
            <View style={styles.topRow}>
                <View style={styles.recipeNameView}>
                    <Text numberOfLines={1} style={styles.recipeName}>
                        Steak with tomato with hot salsa sause.
                    </Text>
                    <View style={styles.ratingView}>
                        {Array.from({ length: 5 }, (_, index) => (
                            <Image
                                key={index}
                                style={styles.starIcon}
                                source={require("../../../assets/icons/star.png")}
                            />
                        ))}
                    </View>
                </View>
                <Image
                    style={styles.recipeImage}
                    source={require("../../../assets/recipe-sample.png")}
                />
            </View>
            <View style={styles.bottomRow}>
                <View style={styles.authorView}>
                    <Image
                        style={styles.authorAvatar}
                        source={require("../../../assets/author-avatar.png")}
                    />
                    <Text style={styles.greyText}>By James Milner</Text>
                </View>
                <View style={styles.timeView}>
                    <Image
                        style={styles.timeIcon}
                        source={require("../../../assets/icons/timer.png")}
                    />
                    <Text style={styles.greyText}>20 mins</Text>
                </View>
            </View>
        </View>
    );
}

export default FeaturedCard;
