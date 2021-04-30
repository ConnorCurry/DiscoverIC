import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import { styles } from '../Styles/Styles.js';
import { homeStyles } from '../Styles/HomeStyles.js';


export function HomeScreen ( { route, navigation} ) {
    return (
        <ScrollView>
            <StatusBar style="light"/>
            <Image source={require('../assets/prw-with-flowers.jpeg')} style={homeStyles.images}/>
            <View style={homeStyles.buildingsView}>
                <Text>
                    Buildings:
                </Text>
            </View>
            
        </ScrollView>
    );
}