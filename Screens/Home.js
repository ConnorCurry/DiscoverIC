import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { styles } from '../Styles/Styles.js'


export function HomeScreen ( { route, navigation} ) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="light"/>
        </SafeAreaView>
    );
}