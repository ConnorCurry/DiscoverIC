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
        backgroundColor: '#003B71',
    },

    logoHeaderText: {
        color: 'white',
        fontWeight: '600'
    },

    logoHeaderTextHidden: {
        color: '#003B71',
        fontWeight: '600',
        fontSize: 8
    }
});