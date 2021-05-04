import React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { styles } from '../Styles/Styles.js';
import { homeStyles } from '../Styles/HomeStyles.js';
import { FlatList } from 'react-native-gesture-handler';

export function BuildingScreen ({ route, navigation }) {
    const {name} = route.params;
    return(
        <View>
            <Text>Building Info: {name} </Text>
        </View>
    )
}