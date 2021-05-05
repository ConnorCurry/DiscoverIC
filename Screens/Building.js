import React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, FlatList, Modal } from 'react-native';
import { styles } from '../Styles/Styles.js';
import { buildingStyles } from '../Styles/BuildingStyles.js';
import { ImageViewer } from '../Components/ImageViewer.js';

const buildingInfo = {
    "James J. Whalen Center for Music" : {
        summary: "The James J. Whalen Center for Music houses Ithaca College's Music School. It contains stunning performance spaces"+
            " like Ford Concert Hall and The Hockett Family Recital hall, as well as several large rehearsal spaces, classrooms, offices, and practice rooms." +
            "",
        studies: "Music Majors",
        studentQuotes: [
            {key: "1", quote: "Diva Lounge is great for socializing, but McHenry has a brilliant view and is usually a bit quieter and better for working."},
            {key: "2", quote: "Hockett hall has fantastic acoustics for solo performances."},
        ],
        accessible: "Yes",
        images: [
            {text: "Practice Room 1321", image: require('../assets/building-images/jjwcm/1321.jpeg')},
            {text: "Practice Room 1322", image: require('../assets/building-images/jjwcm/1322.jpeg')},
            {text: "Practice Room 1343", image: require('../assets/building-images/jjwcm/1343.jpeg')},
            {text: "Practice Room 1347", image: require('../assets/building-images/jjwcm/1347.jpeg')},
            {text: "Classroom 2328", image: require('../assets/building-images/jjwcm/2328.jpeg')},
            {text: "Rehearsal Room and Classroom 3302", image: require('../assets/building-images/jjwcm/3302.jpeg')},
            {text: "Rehearsal Room and Classroom 3304", image: require('../assets/building-images/jjwcm/3304.jpeg')},
            {text: "Fourth Floor Atrium", image: require('../assets/building-images/jjwcm/atrium.jpeg')},
            {text: "Diva Lounge", image: require('../assets/building-images/jjwcm/diva.jpeg')},
            {text: "Ford Concert Hall", image: require('../assets/building-images/jjwcm/ford.jpeg')},
            {text: "Husa Gallery", image: require('../assets/building-images/jjwcm/husa.jpeg')},
            {text: "Iger Hall", image: require('../assets/building-images/jjwcm/iger.jpeg')},
            {text: "McHenry Lounge", image: require('../assets/building-images/jjwcm/mchenry.jpeg')},
            {text: "Presser Rehearsal Hall", image: require('../assets/building-images/jjwcm/presser1.jpeg')},
            {text: "Presser Rehearsal Hall", image: require('../assets/building-images/jjwcm/presser2.jpeg')},
            {text: "Instrument Repair Window", image: require('../assets/building-images/jjwcm/repair-window.jpeg')},
        ]
    },
    "Dillingham Center" : {
        summary: ""
    },
}

export function BuildingScreen ({ route, navigation }) {
    const {name} = route.params;
    const {imageSource} = route.params;
    const [quoteRender, setQuoteRender] = React.useState(true);
    const [viewingImages, setViewingImages] = React.useState(false);

    function RenderStudentQuotes({quote}) {
        /* if (quoteRender) {
            setQuoteRender(false);
        } else setQuoteRender(true); */
        return (
            <View>
                <Text 
                    style={quoteRender ? buildingStyles.studentQuoteStyle0 : buildingStyles.studentQuoteStyle1}>
                        "{quote}"
                </Text>
            </View>
        )
    }
    return(
        <View>
            <FlatList
                style={buildingStyles.flatListStyle}
                ListHeaderComponent={
                    <View>
                        <View>
                            <Image source={imageSource} style={buildingStyles.buildingImage}/>
                            <View style={buildingStyles.buildingTextView}>
                                <Text style={buildingStyles.buildingText}>{name} </Text>
                            </View>
                        </View>
                        <Text style={buildingStyles.summaryText}>{buildingInfo[name].summary}</Text>
                        <Text style={buildingStyles.studentsSayStyle}>Students Say:</Text>
                    </View>
                }
                data={buildingInfo[name].studentQuotes}
                renderItem={({item}) => <RenderStudentQuotes quote={item.quote}/>}
                ListFooterComponent={
                    <View style={{paddingVertical: 10}}>
                        <TouchableOpacity 
                        style={buildingStyles.imagePreviewView}
                        onPress={() => setViewingImages(true)}
                        >
                            <Image 
                                style={buildingStyles.imagePreviewView}
                                source={buildingInfo[name].images[0].image}/>
                            <View style={buildingStyles.imagePreviewTextView}>
                                <Text style={buildingStyles.imagePreviewText}>Images</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={buildingStyles.accessibiltyStyle}>Accessible? {buildingInfo[name].accessible}</Text>
                    </View>
                }
            />
            {viewingImages ? <ImageViewer images={buildingInfo[name].images} setViewingImages={setViewingImages}/> : null}
        </View>
    )
}