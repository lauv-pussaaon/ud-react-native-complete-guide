import React, { useState } from "react";
import { SafeAreaView, View, Text, Alert } from "react-native";
import GlobalStyles from "../../../constants/GlobalStyles";
import TitleBold from "../../../components/TitleBold";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Link from "../../../components/Link";
import styles from "./styles";
import auth from "@react-native-firebase/auth";
import { useUIContext } from "../../../context/UIContext";

function Signin() {
    const { hasNotch } = useUIContext();
    const [values, setValues] = useState({});

    function onFormInputChanged(value, key) {
        setValues(vals => ({
            ...vals,
            [key]: value,
        }));
    }

    function handleSignIn() {
        auth()
            .signInWithEmailAndPassword(values.email, values.password)
            .then(() => {
                console.log("logined successfully");
            })
            .catch(error => {
                if (
                    error.code === "auth/wrong-password" ||
                    error.code === "auth/invalid-credential"
                ) {
                    Alert.alert("Wrong email or password");
                } else if (error.code === "auth/invalid-email") {
                    Alert.alert("Invalid email");
                } else {
                    Alert.alert(error.message);
                }
            });
    }

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
                    onChangeText={val => onFormInputChanged(val, "email")}
                    placeholder="Email"
                    keyboardType="email-address"
                    inputMode="email"
                />
                <Input
                    onChangeText={val => onFormInputChanged(val, "password")}
                    placeholder="Password"
                    secureTextEntry
                />
            </View>
            <Button
                type="secondary"
                onPress={handleSignIn}
                disabled={!values.email}>
                Log in
            </Button>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Not registed?</Text>
                <Link>Sign up!</Link>
            </View>
        </SafeAreaView>
    );
}

export default Signin;
