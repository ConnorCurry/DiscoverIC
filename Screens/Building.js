import React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, FlatList, Modal } from 'react-native';
import { styles } from '../Styles/Styles.js';
import { buildingStyles } from '../Styles/BuildingStyles.js';

const buildingInfo = {
    "James J. Whalen Center for Music" : {
        summary: "The James J. Whalen Center for Music houses Ithaca College's Music School. It contains stunning performance spaces"+
            " like Ford Concert Hall and The Hockett Family Recital hall, as well as several large rehearsal spaces, classrooms, offices, and practice rooms." +
            "",
        studies: "Music Majors",
        studentQuotes: [
            {key: 1, quote: "Diva Lounge is great for socializing, but McHenry has a brilliant view and is usually a bit quieter and better for working."},
            {key: 2, quote: "Hockett hall has fantastic acoustics for solo performances."},
        ],
        accessible: "Yes",
        images: [
            {text: "Practice Room 1321", image: require('../assets/building-images/jjwcm/1321.jpeg')},
            {text: "Practice Room 1322", image: require('../assets/building-images/jjwcm/1321.jpeg')},
            {text: "Practice Room 1343", image: require('../assets/building-images/jjwcm/1321.jpeg')},
            {text: "Practice Room 1347", image: require('../assets/building-images/jjwcm/1321.jpeg')},
        ]
    },
    "Dillingham Center" : {
        summary: ""
    },
}

export function BuildingScreen ({ route, navigation }) {
    const {name} = route.params;
    const {imageSource} = route.params

    function RenderStudentQuotes({quote}) {
        return (
            <View>
                <Text>{quote}</Text>
            </View>
        )
    }

    return(
        <FlatList
            ListHeaderComponent={
                <View>
                    <Image source={imageSource}/>
                    <Text>Building Info: {name} </Text>
                    <Text>{buildingInfo[name].summary}</Text>
                </View>
            }
            data={buildingInfo[name].studentQuotes}
            renderItem={({item}) => <RenderStudentQuotes quote={item.quote}/>}
            ListFooterComponent={
                <View>
                    <Text>Accessible? {buildingInfo[name].accessible}</Text>
                </View>
            }
        />
    )
}