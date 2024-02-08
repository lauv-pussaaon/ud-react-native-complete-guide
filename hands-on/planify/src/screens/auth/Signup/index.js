import React, { useState } from "react";
import { SafeAreaView, View, Text, Alert, ScrollView } from "react-native";
import { useUIContext } from "../../../context/UIContext";
import GlobalStyles from "../../../constants/GlobalStyles";
import TitleBold from "../../../components/TitleBold";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Link from "../../../components/Link";
import CheckBox from "../../../components/CheckBox";
import styles from "./styles";
import auth from "@react-native-firebase/auth";

function Signup() {
    const { hasNotch } = useUIContext();
    const [consent, setConsent] = useState(false);
    const [values, setValues] = useState({});

    function handleCreateAccount() {
        if (values.password !== values.confirm_password) {
            Alert.alert("Passwords do not match");
            return;
        }
        auth()
            .createUserWithEmailAndPassword(values.email, values.password)
            .then(() => {
                auth().currentUser.updateProfile({
                    displayName: `${values.first_name} ${values.last_name}`,
                });
            })
            .catch(error => {
                if (error.code === "auth/email-already-in-use") {
                    Alert.alert("That email address is already in use!");
                }

                if (error.code === "auth/invalid-email") {
                    Alert.alert("That email address is invalid!");
                }

                console.error(error);
            });
    }

    function onFormInputChanged(value, key) {
        setValues(vals => ({
            ...vals,
            [key]: value,
        }));
    }

    return (
        <SafeAreaView
            style={[
                hasNotch
                    ? GlobalStyles.screenContainerWithNotch
                    : GlobalStyles.screenContainer,
            ]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TitleBold>Join the hub :)</TitleBold>
                <View style={styles.inputContainer}>
                    <Input
                        onChangeText={val =>
                            onFormInputChanged(val, "first_name")
                        }
                        placeholder="First Name"
                    />
                    <Input
                        onChangeText={val =>
                            onFormInputChanged(val, "last_name")
                        }
                        placeholder="Last Name"
                    />
                    <Input
                        onChangeText={val => onFormInputChanged(val, "email")}
                        placeholder="Email"
                        keyboardType="email-address"
                        inputMode="email"
                    />
                    <Input
                        onChangeText={val =>
                            onFormInputChanged(val, "password")
                        }
                        placeholder="Password"
                        secureTextEntry
                    />
                    <Input
                        onChangeText={val =>
                            onFormInputChanged(val, "confirm_password")
                        }
                        placeholder="Confirm Password"
                        secureTextEntry
                    />
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
                <Button
                    type="primary"
                    onPress={handleCreateAccount}
                    disabled={!consent}>
                    Create account
                </Button>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already registered?</Text>
                    <Link>Sign in!</Link>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Signup;
