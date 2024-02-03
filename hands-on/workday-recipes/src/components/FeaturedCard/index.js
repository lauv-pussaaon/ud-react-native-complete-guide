import React from "react";
import { View, Text, Image } from "react-native";
import { useTheme } from "@react-navigation/native";

import { getStyles } from "./styles";

function FeaturedCard({
    recipeName,
    recipeImageUrl,
    rating,
    authorName,
    authorImageUrl,
    prepMinutes,
    customStyle,
}) {
    const theme = useTheme();
    const styles = getStyles(theme);
    const finalRating = rating ? Math.round(rating) : 0;

    return (
        <View style={[styles.card, customStyle]}>
            <View style={styles.topRow}>
                <View style={styles.recipeNameView}>
                    <Text numberOfLines={1} style={styles.recipeName}>
                        {recipeName}
                    </Text>
                    <View style={styles.ratingView}>
                        {Array.from({ length: 5 }, (_, index) => (
                            <Image
                                key={index}
                                style={styles.starIcon}
                                source={
                                    rating >= index + 1
                                        ? require("../../../assets/icons/star.png")
                                        : require("../../../assets/icons/star-empty.png")
                                }
                            />
                        ))}
                    </View>
                </View>
                <Image
                    style={styles.recipeImage}
                    source={{ uri: recipeImageUrl }}
                />
            </View>
            <View style={styles.bottomRow}>
                <View style={styles.authorView}>
                    <Image
                        style={styles.authorAvatar}
                        source={
                            authorImageUrl
                                ? { uri: authorImageUrl }
                                : require("../../../assets/user-avatar.png")
                        }
                    />
                    <Text style={styles.greyText} numberOfLines={2}>
                        By {authorName || "--"}
                    </Text>
                </View>
                <View style={styles.timeView}>
                    <Image
                        style={styles.timeIcon}
                        source={require("../../../assets/icons/timer.png")}
                    />
                    <Text style={styles.greyText}>
                        {prepMinutes || "--"} mins
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default FeaturedCard;
