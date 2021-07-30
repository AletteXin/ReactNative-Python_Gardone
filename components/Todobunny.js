
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Todobunny = () => {

    return (
        <View style={styles.layout}>
            <Image source={require('../assets/Bunny.png')} style={styles.picture} />
        </View>
    )
};

export default Todobunny;

const styles = StyleSheet.create({

    layout: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: 200,
        width: 200,
        borderRadius: 100,
        padding: 20,
        marginBottom: '3%',
        marginLeft: '-10%',
    },

    picture: {
        height: 180,
        width: 200,
    },

});


