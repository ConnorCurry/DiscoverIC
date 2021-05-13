import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logoHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 10,
        // height: '49%',
        backgroundColor: '#1C475F',
    },

    logoHeaderText: {
        color: 'white',
        fontWeight: '600',
        fontFamily: 'Source',
        fontSize: 16
    },

    logoHeaderTextHidden: {
        color: '#1C475F',
        fontWeight: '600',
        fontSize: 8,
    }
});