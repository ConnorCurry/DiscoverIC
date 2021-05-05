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
    },

    summaryText: {
        color: 'lightgray',
        padding: 10,
        fontSize: win.width / 22,
        fontWeight: '500',
    },

    flatListStyle: {
        backgroundColor: '#002343',
    },

    studentsSayStyle: {
        textAlign: 'left',
        color: 'rgba(200,200,200,1)',
        padding: 10,
        fontSize: win.width /25,
        fontWeight: '700',
    },

    studentQuoteStyle0: {
        textAlign: 'left',
        color: 'rgba(200,200,200,1)',
        padding: 10,
        fontSize: win.width /25,
    },

    studentQuoteStyle1: {
        
    },

    accessibiltyStyle: {
        textAlign: 'center',
        color: 'rgba(200,200,200,1)',
        padding: 10,
        fontSize: win.width /25,
    },
});