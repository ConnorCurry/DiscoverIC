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
    {key: "frnd", name: "Friends Hall", image: require('../assets/building-images/frnd.jpeg')}, 
    {key: "gann", name: "Gannett Center", image: require('../assets/building-images/gann.jpeg')}, 
    {key: "chs", name: "Center for Health Sciences", image: require('../assets/building-images/chs.jpeg')}, 
    {key: "hill", name: "Hill Center", image: require('../assets/building-images/hill.jpeg')}, 
    {key: "job", name: "Job Hall", image: require('../assets/building-images/job.jpeg')},
    {key: "cer", name: "Cerrache Center", image: require('../assets/building-images/cer.jpeg')},
    {key: "bus", name: "Park School of Business", image: require('../assets/building-images/bus.jpeg')},
    {key: "park", name: "Park School of Communications", image: require('../assets/building-images/park.jpeg')},
    {key: "phil", name: "Campus Center - Phillips Hall", image: require('../assets/building-images/phil.jpeg')},
    {key: "writ", name: "Smiddy Hall", image: require('../assets/building-images/writ.jpeg')},
    {key: "text", name: "Textor Hall", image: require('../assets/building-images/text.jpeg')},
    {key: "will", name: "Williams Hall", image: require('../assets/building-images/will.jpeg')},
    /* {key: "", name: "", image: require('../assets/icon.png')}, */
]

export function HomeScreen ( { route, navigation} ) {

    function RenderBuildings ({name, imageSource}) {
        if (name == null) {
            console.log("NO NAME")
        }
        return(
            <View style={{borderBottomColor: 'black', borderBottomWidth: 2,}}>
                <Image source={imageSource} style={homeStyles.buildingImages}/>
                <View style={homeStyles.buildingTextView}>
                    <Text style={homeStyles.buildingText}>{name}</Text>
                </View>
            </View>
        );
    }

    return ( 
        <View>
            <FlatList
                ListHeaderComponent={
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