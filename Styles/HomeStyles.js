import { StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';

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
        height: 5,
        backgroundColor: '#003B71',
        borderWidth: 1,
        borderColor: '#003B71',
        justifyContent: 'center',
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
    },

    prwTextView: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },

    prwTextBackground: {
        backgroundColor: 'rgba(255,255,255,.7)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        padding: 10
    },
    
    prwText: {
        color: '#003B71',
        fontWeight: '500',
        fontSize: win.width/10,
        textAlign: 'center'
    }

});