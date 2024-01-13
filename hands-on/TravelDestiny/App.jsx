import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';


function App() {
    return (
        <SafeAreaView style={styles.safeView}>
            <View style={styles.view}><Text>Hello World</Text></View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        backgroundColor: 'red',
    },
    view: {
        flex: 1,
        backgroundColor: 'yellow'
    }
});

export default App;
