import { StyleSheet, Dimensions } from 'react-native';

const win = Dimensions.get('window');
const prwRatio = win.width/1200

export const homeStyles = StyleSheet.create({

    images: {
        width: win.width,
        height: 818 * prwRatio,
        resizeMode: "contain",
    },

    buildingsView: {
        width: win.width,
        backgroundColor: 'lightgray',
        borderWidth: 1,
        borderColor: 'gray',
        justifyContent: 'center',
        padding: 10
    },

    buildingImages: {
        width: win.width,
        height: win.width/2,
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
    }

});