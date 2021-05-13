import React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, FlatList, Modal } from 'react-native';
import { styles } from '../Styles/Styles.js';
import { buildingStyles } from '../Styles/BuildingStyles.js';
import { ImageViewer } from '../Components/ImageViewer.js';
import { buildingInfo } from '../Components/BuildingInfo.js';

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
    let imageComponent = null;
    if (buildingInfo[name].images.length != 0) {
        imageComponent = (
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
        )
    }
    return(
        <View style={{backgroundColor: '#1C475F'}}>
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
                    <View style={{paddingVertical: 10, paddingBottom: 20}}>
                        {imageComponent}
                        <Text style={buildingStyles.accessibiltyStyle}>Accessibility: {buildingInfo[name].accessible}</Text>
                    </View>
                }
            />
            {viewingImages ? <ImageViewer images={buildingInfo[name].images} setViewingImages={setViewingImages}/> : null}
        </View>
    )
}