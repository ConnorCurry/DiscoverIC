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
});