import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import GlobalStyles from "../../../constants/GlobalStyles";
import TitleBold from "../../../components/TitleBold";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Link from "../../../components/Link";
import CheckBox from "../../../components/CheckBox";
import styles from "./styles";
import { useUIContext } from "../../../context/UIContext";

function Signup() {
    const { hasNotch } = useUIContext();
    const [consent, setConsent] = useState(false);

    return (
        <SafeAreaView
            style={[
                hasNotch
                    ? GlobalStyles.screenContainerWithNotch
                    : GlobalStyles.screenContainer,
            ]}>
            <TitleBold>Join the hub :)</TitleBold>
            <View style={styles.inputContainer}>
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
                <Input
                    placeholder="Email"
                    keyboardType="email-address"
                    inputMode="email"
                />
                <Input placeholder="Password" secureTextEntry />
                <Input placeholder="Confirm Password" secureTextEntry />
                <View style={styles.consentView}>
                    <CheckBox
                        checked={consent}
                        onPress={() => setConsent(c => !c)}
                    />
                    <Text style={styles.consentText}>
                        I agree to Terms and Conditions and Privacy Policy
                    </Text>
                </View>
            </View>
            <Button type="primary">Create account</Button>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Already registered?</Text>
                <Link>Sign in!</Link>
            </View>
        </SafeAreaView>
    );
}

export default Signup;
