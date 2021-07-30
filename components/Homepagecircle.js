
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Homepagecircle = () => {

    return (
        <View style={styles.layout}>
            <Image source={require('../assets/Monster.png')} style={styles.picture} />
        </View>
    )
};

export default Homepagecircle;

const styles = StyleSheet.create({

    layout: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: 200,
        width: 200,
        borderRadius: 100,
        padding: 20,
        marginBottom: '-10%',
    },

    picture: {
        height: 200,
        width: 200,
    },
});


