import { StyleSheet, Dimensions, Platform } from 'react-native';

let screenSize = (Dimensions.get("window").width * Dimensions.get('window').height) / 49000;
const win = Dimensions.get('window');

export const imageViewerStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,.93)',
        zIndex: 1,
        width: '100%',
        height: '100%',
      },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems:'center',
    },
    headerText: {
        fontSize: 28,
        textAlign: "center",
        margin: 10,
        color:'white',
        fontWeight: 'bold',
    },
    contentText: {
        fontSize: screenSize * 3,
        textAlign: 'center', 
        marginHorizontal: 30,
        color: 'white',
    },

    image: {
        width: win.width,
        resizeMode: 'contain',
        height: win.width * .5625,
    }
})