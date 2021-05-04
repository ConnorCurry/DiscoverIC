import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import { styles } from '../Styles/Styles.js';
import { homeStyles } from '../Styles/HomeStyles.js';
import { FlatList } from 'react-native-gesture-handler';

const buildings = [
    {key: "jjwcm", name: "James J Whalen Center for Music", image: require('../assets/jjwcm.jpeg')}, 
    {key: "dill", name: "Dillingham Center", image: require('../assets/dill.jpeg')}, 
    /* "Friends Hall", "Gannett Center", "Center for Health Sciences", "Hill Center", "Job Hall" */]

export function HomeScreen ( { route, navigation} ) {

    function RenderBuildings ({name, imageSource}) {
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