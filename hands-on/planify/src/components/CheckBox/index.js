import React from "react";
import { View, Pressable } from "react-native";
import styles from "./styles";

function CheckBox({ checked, ...props }) {
    return (
        <Pressable
            {...props}
            style={[styles.checkbox, checked ? styles.checked : {}]}>
            {checked ? <View style={styles.innerBox} /> : null}
        </Pressable>
    );
}

export default CheckBox;
