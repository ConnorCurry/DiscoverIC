import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, SafeAreaView, Image, Button, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { HomeScreen } from './Screens/Home.js'
import { styles } from './Styles/Styles.js'
import * as Font from 'expo-font';
import  AppLoading  from 'expo-app-loading'
import { BuildingScreen } from './Screens/Building.js';
import { useFonts } from 'expo-font';


const Stack = createStackNavigator();

export default function App({ navigation, props }) {
    let [fontsLoaded] = useFonts({
        'Trajan': require('./assets/fonts/Trajan-Pro-Regular.ttf'),
        'Source': require('./assets/fonts/Source_Serif_Pro/SourceSerifPro-Regular.ttf'),
        'Source-Bold': require('./assets/fonts/Source_Serif_Pro/SourceSerifPro-Black.ttf'),
        'Roboto': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
        'Roboto-Medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
    });

    if(!fontsLoaded) {
        return <AppLoading/>;
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName>
                    <Stack.Screen 
                        name="Home" 
                        component={HomeScreen} 
                        options={{
                            headerStyle: {backgroundColor: '#1C475F'}, 
                            headerTintColor: 'white',
                            header: HomeHeader
                        }}
                    />
                    <Stack.Screen
                        name="Building"
                        component={BuildingScreen}
                        options={{
                            headerStyle: {backgroundColor: '#1C475F'}, 
                            headerTintColor: 'white',
                            header: BuildingHeader,
                        }}
                    />
                </Stack.Navigator>      
            </NavigationContainer>
        );
    }
}

function HomeHeader ( {route, navigation } ) {
    return (
        <SafeAreaView style={styles.logoHeader}>
            <Image source={require('./assets/ic-logo-white.png')} style={{ width: 170, height: 26 }}></Image>
            <Text style={styles.logoHeaderText}>DiscoverIC</Text>
            <Text style={styles.logoHeaderTextHidden}>DiscoverIC</Text>
            <StatusBar style="light"/>
        </SafeAreaView>
    );
}
function BuildingHeader ( {route, navigation } ) {
    return (
        <SafeAreaView style={styles.logoHeader}>
            <Image source={require('./assets/ic-logo-white.png')} style={{ width: 170, height: 26 }}></Image>
            <Text style={styles.logoHeaderText}>DiscoverIC</Text>
            <StatusBar style="light"/>
            <View style={{position: 'absolute', left: 10, bottom: 5}}>
                <Button
                    title={"Back"}
                    onPress={() => {const popAction = StackActions.pop(1); navigation.dispatch(popAction)}}
                    color={Platform.OS === 'ios' ? 'white': '#0077B8'}
                />
            </View>
        </SafeAreaView>
    );
}
