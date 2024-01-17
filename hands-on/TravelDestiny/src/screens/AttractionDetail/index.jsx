import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, SafeAreaView } from "react-native";

function AttractionDetail({ route }) {
    const { item: attraction } = route?.params || {};
    const navigation = useNavigation();

    const onBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView>
            <Text onPress={onBack}>Back</Text>
            <Text>Attraction Detail - {attraction.name}</Text>
        </SafeAreaView>
    );
}

export default AttractionDetail;
