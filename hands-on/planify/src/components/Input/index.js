import React from "react";
import { TextInput } from "react-native";
import GlobalStyles from "../../constants/GlobalStyles";
import styles from "./styles";

function Input({ ...props }) {
    return (
        <TextInput
            placeholderTextColor={GlobalStyles.grey600}
            {...props}
            style={styles.input}></TextInput>
    );
}

export default Input;
