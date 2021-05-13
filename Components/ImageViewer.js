import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Animated, Dimensions, Text, View, Button, TextInput, SafeAreaView, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';
import { styles } from '../Styles/Styles.js';
import { imageViewerStyles } from '../Styles/ImageViewerStyles';
import Swiper from 'react-native-swiper';

let screenSize = (Dimensions.get("window").width * Dimensions.get('window').height) / 49000;
export function ImageViewer({images, setViewingImages, viewingImages}) {
    const slide = React.useRef(new Animated.Value(Dimensions.get("screen").height)).current;
    const [sliderLoaded, setSliderLoaded] = React.useState(false);
    React.useEffect(() => {
        setTimeout(() => {setSliderLoaded(true)}, 300)
    },[])
    const slideIn = () => {
        Animated.timing(slide, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
        }).start();
    };
    React.useEffect(slideIn) 
    const slideOut = () => {
        Animated.timing(slide, {
        toValue: Dimensions.get("screen").height,
        duration: 300,
        useNativeDriver: false,
        }).start();
    };
    const SwiperStack = () => {
        const done = () => {
            slideOut()
            setTimeout(function(){
                setViewingImages(false);
            }, 300)
        }
        
        let imageArray = []
        for (let i = 0; i < images.length; i++) {
            let tempItem = (
                <View style={imageViewerStyles.contentContainer} key={i}>
                    <Text style={imageViewerStyles.contentText}>{images[i].text}</Text>
                    <Image source={images[i].image} style={imageViewerStyles.image}/>
                    <Button title="Dismiss" onPress={() => done()} color={'white'}/>
                </View>
            );
            imageArray[i] = tempItem;
        }

        return (
        <Swiper loop={false} activeDotColor={'#003B71'}>
            {imageArray}
        </Swiper>
        )
    }

    return (
        <Animated.View
            style={[imageViewerStyles.container,
            {
                transform: [{ translateY: slide }]
            }]}>
            {sliderLoaded ?  <SwiperStack/> : <Modal transparent={true}/>}
        </Animated.View>

    );
}