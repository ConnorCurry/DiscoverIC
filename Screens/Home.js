import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import { styles } from '../Styles/Styles.js'


export function HomeScreen ( { route, navigation} ) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Image source={require('../assets/ic-logo.png')} style={{ width: 200, height: 20 }}></Image>
            <StatusBar style="light"/>
        </SafeAreaView>
    );
}