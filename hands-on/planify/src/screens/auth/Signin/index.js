import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import TitleBold from "../../../components/TitleBold";
import Button from "../../../components/Button";
import GlobalStyles from "../../../constants/GlobalStyles";
import Input from "../../../components/Input";
import Link from "../../../components/Link";

function Signin() {
    return (
        <SafeAreaView style={GlobalStyles.screenContainer}>
            <TitleBold>Welcome back!</TitleBold>
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Email"
                    keyboardType="email-address"
                    inputMode="email"
                />
                <Input placeholder="Password" secureTextEntry />
            </View>
            <Button type="secondary">Log in</Button>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Not registed?</Text>
                <Link>Sign up!</Link>
            </View>
        </SafeAreaView>
    );
}

export default Signin;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 36,
        gap: 24,
        marginBottom: 48,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 8,
        marginTop: 26,
    },
    footerText: {
        fontSize: 16,
        color: GlobalStyles.colors.grey400,
    },
});
