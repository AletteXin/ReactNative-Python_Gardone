
import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';


const Homepagerewards = () => {

    return (
        <View style={styles.layout}>

            <View style={styles.subtitle}>
                <Text style={styles.subtitleText}> YOU'RE DOING WELL. KEEP GOING! </Text>
            </View>
            <View style={styles.pageBox}>
            </View>

        </View>
    )
};


export default Homepagerewards;


// Styles

const styles = StyleSheet.create({

    layout: {
        flex: 1,
        width: Dimensions.get('window').width,
        marginBottom: "3%",
        backgroundColor: 'white',
        marginTop: 10,
        width: '100%',
        padding: 15,
        paddingVertical: 20,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
    },

    subtitleText: {
        fontSize: 14,
        color: 'white',
        borderRadius: 18,
        justifyContent: 'flex-start',
        fontWeight: "500",
        fontStyle: 'italic',
    },

    subtitle: {
        height: 46,
        borderWidth: 5,
        borderColor: '#0000c8',
        borderBottomColor: '#fdb913',
        width: "100%",
        backgroundColor: 'black',
        paddingVertical: 7,
        borderRadius: 20,
        alignItems: 'center',
    },


});
