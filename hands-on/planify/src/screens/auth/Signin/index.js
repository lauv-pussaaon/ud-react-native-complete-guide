import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import GlobalStyles from "../../../constants/GlobalStyles";
import TitleBold from "../../../components/TitleBold";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Link from "../../../components/Link";
import styles from "./styles";
import { useUIContext } from "../../../context/UIContext";

function Signin() {
    const { hasNotch } = useUIContext();

    return (
        <SafeAreaView
            style={[
                hasNotch
                    ? GlobalStyles.screenContainerWithNotch
                    : GlobalStyles.screenContainer,
            ]}>
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
