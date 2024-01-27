import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";

function Home() {
    return (
        <View style={styles.card}>
            <View style={styles.topRow}>
                <View style={styles.recipeNameView}>
                    <Text numberOfLines={1} style={styles.recipeName}>
                        Steak with tomato with hot salsa sause.
                    </Text>
                    <View style={styles.ratingView}>
                        {Array.from({ length: 5 }).map(() => (
                            <Image
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

export default Home;
