import { StyleSheet, Dimensions, FlatList } from 'react-native';

const win = Dimensions.get('window');

export const buildingStyles = StyleSheet.create({

    buildingImage: {
        width: win.width,
        height: win.width /2,
        resizeMode: 'cover',
    },

    buildingTextView: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.5)'
    },

    buildingText: {
        color: 'white',
        fontSize: win.width / 15,
        width: win.width * .7,
        textAlign: 'center',
        fontFamily: 'Source',
    },

    summaryText: {
        color: 'rgba(185,185,185,1)',
        padding: 10,
        fontSize: win.width / 22,
        fontWeight: '500',
        fontFamily: 'Roboto',

    },

    flatListStyle: {
        backgroundColor: '#1C475F',
    },

    studentsSayStyle: {
        textAlign: 'left',
        color: '#F6F4F3',
        padding: 10,
        fontSize: win.width /25,
        fontWeight: '700',
        fontFamily: 'Roboto-Medium',
    },

    studentQuoteStyle0: {
        textAlign: 'left',
        color: '#F6F4F3',
        padding: 10,
        fontSize: win.width /25,
        fontFamily: 'Roboto',
    },

    studentQuoteStyle1: {
        
    },

    accessibiltyStyle: {
        textAlign: 'center',
        color: 'rgba(200,200,200,1)',
        padding: 15,
        fontSize: win.width /25,
        fontFamily: 'Roboto',
    },

    footerView: {
        width: win.width,
        alignContent: 'center',
        justifyContent: 'center'
    },

    imagePreviewView: {
        width: win.width * .9,
        height: (win.width / 2) * .9,
        alignContent: 'center',
        alignSelf: 'center'
    },

    imagePreviewTextView: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.5)'
    },
    
    imagePreviewText: {
        color: 'white',
        fontSize: win.width /20,
        fontFamily: 'Source'
    },
});