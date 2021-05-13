import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { styles } from '../Styles/Styles.js';
import { homeStyles } from '../Styles/HomeStyles.js';
import { FlatList } from 'react-native-gesture-handler';
import { buildings } from '../Components/BuildingsList.js';

export function HomeScreen ( {route, navigation} ) {

    let academic = []
    for (i = 0; i < buildings.academic.length; i++){
        let academicName = buildings.academic[i].name;
        let academicImage = buildings.academic[i].image;
        let temp = (
            <TouchableOpacity style={{borderBottomColor: 'black', borderBottomWidth: 2,}}
            key={"a"+i}
            activeOpacity={.2}
            onPress={() => navigation.navigate('Building', {name: academicName, imageSource: academicImage})}>
                <Image source={buildings.academic[i].image} style={homeStyles.buildingImages}/>
                <View style={homeStyles.buildingTextView}>
                    <Text style={homeStyles.buildingText}>{academicName}</Text>
                </View>
            </TouchableOpacity>
        )
        academic[i] = temp;
    }

    let residential = []
    for (j = 0; j < buildings.residential.length; j++){
        let residentialName = buildings.residential[j].name;
        let residentialImage = buildings.residential[j].image;
        let temp = (
            <TouchableOpacity style={{borderBottomColor: 'black', borderBottomWidth: 2,}}
            key={"r"+j}
            activeOpacity={.2}
            onPress={() => navigation.navigate('Building', {name: residentialName, imageSource: residentialImage})}>
                <Image source={buildings.residential[j].image} style={homeStyles.buildingImages}/>
                <View style={homeStyles.buildingTextView}>
                    <Text style={homeStyles.buildingText}>{residentialName}</Text>
                </View>
            </TouchableOpacity>
        )
        residential[j] = temp;
    }

    let campusLife = []
    for (k = 0; k < buildings.campusLife.length; k++){
        let campusName = buildings.campusLife[k].name;
        let campusImage = buildings.campusLife[k].image;
        let temp = (
            <TouchableOpacity style={{borderBottomColor: 'black', borderBottomWidth: 2,}}
            key={"c"+k}
            activeOpacity={.2}
            onPress={() => navigation.navigate('Building', {name: campusName, imageSource: campusImage})}>
                <Image source={buildings.campusLife[k].image} style={homeStyles.buildingImages}/>
                <View style={homeStyles.buildingTextView}>
                    <Text style={homeStyles.buildingText}>{campusName}</Text>
                </View>
            </TouchableOpacity>
        )
        campusLife[k] = temp;
    }

    return ( 
        <ScrollView style={{backgroundColor: '#1C475F'}}>
            <View>
                <StatusBar style="light"/>
                <View>
                    <Image source={require('../assets/prw-with-flowers.jpeg')} style={homeStyles.images}/>
                    <View style={homeStyles.prwTextView}>
                        <View style={homeStyles.prwTextBackground}>
                            <Text style={homeStyles.prwText}>Welcome to {"\n"} Ithaca College</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <View style={homeStyles.divider}>
                    <Text style={homeStyles.dividerText}>Academic:</Text>
                </View>
                {academic}
                <View style={homeStyles.divider}>
                    <Text style={homeStyles.dividerText}>Residential:</Text>
                </View>
                {residential}
                <View style={homeStyles.divider}>
                    <Text style={homeStyles.dividerText}>Campus Life:</Text>
                </View>
                {campusLife}
            </View>
        </ScrollView>
    );
}