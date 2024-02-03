import React from "react";
import { ActivityIndicator, StyleSheet, View, Modal } from "react-native";
import { useTheme } from "@react-navigation/native";

const FullScreenLoading = ({ isVisible }) => {
    const theme = useTheme();
    const styles = StyleSheet.create(getStyles(theme));
    return (
        <Modal
            transparent={true}
            animationType="none"
            visible={isVisible}
            onRequestClose={() => null}
        >
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator
                        size="large"
                        color={theme.colors.primary}
                        animating={isVisible}
                    />
                </View>
            </View>
        </Modal>
    );
};

const getStyles = (theme) => ({
    modalBackground: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-around",
        backgroundColor: "#00000040", // Semi-transparent background
    },
    activityIndicatorWrapper: {
        backgroundColor: "#FFFFFF",
        height: "100%",
        width: "100%",
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
    },
});

export default FullScreenLoading;
