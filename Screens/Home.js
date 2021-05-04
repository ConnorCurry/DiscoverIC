import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import { styles } from '../Styles/Styles.js';
import { homeStyles } from '../Styles/HomeStyles.js';
import { FlatList } from 'react-native-gesture-handler';
// import { buildings } from '../assets/buildings.json';

const buildings = [
    {key: "jjwcm", name: "James J Whalen Center for Music", image: require('../assets/building-images/jjwcm.jpeg')}, 
    {key: "dill", name: "Dillingham Center", image: require('../assets/building-images/dill.jpeg')}, 
    {key: "frnd", name: "Friends Hall", image: require('../assets/icon.png')}, 
    {key: "gann", name: "Gannett Center", image: require('../assets/icon.png')}, 
    {key: "chs", name: "Center for Health Sciences", image: require('../assets/icon.png')}, 
    {key: "hill", name: "Hill Center", image: require('../assets/icon.png')}, 
    {key: "job", name: "Job Hall", image: require('../assets/icon.png')},
    {key: "cer", name: "Cerrache Center", image: require('../assets/icon.png')},
    {key: "bus", name: "Park School of Business", image: require('../assets/icon.png')},
    {key: "park", name: "Park School of Communications", image: require('../assets/icon.png')},
    {key: "phil", name: "Phillips Hall", image: require('../assets/icon.png')},
    {key: "writ", name: "Smiddy Hall", image: require('../assets/icon.png')},
    {key: "text", name: "Textor Hall", image: require('../assets/icon.png')},
    {key: "will", name: "Williams Hall", image: require('../assets/icon.png')},
    {key: "", name: "", image: require('../assets/icon.png')},
]

export function HomeScreen ( { route, navigation} ) {

    function RenderBuildings ({name, imageSource}) {
        if (name == null) {
            console.log("NO NAME")
        }
        return(
            <View style={{borderBottomColor: 'black', borderBottomWidth: 2}}>
                <Text>{name}</Text>
                <Image source={imageSource} style={homeStyles.buildingImages}/>
            </View>
        );
    }

    return ( 
        <View>
            <FlatList
                ListHeaderComponent={
                    <View>
                        <StatusBar style="light"/>
                        <Image source={require('../assets/prw-with-flowers.jpeg')} style={homeStyles.images}/>
                        <View style={homeStyles.buildingsView}>
                            <Text>
                                Buildings:
                            </Text>
                        </View>
                    </View>
                }
                data={buildings}
                extraData={buildings}
                renderItem={({item}) => <RenderBuildings key={item.key} name={item.name} imageSource={item.image}/>}
            />
        </View>
    );
}