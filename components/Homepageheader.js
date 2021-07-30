
import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LoginContext } from '../LoginContext';

const Homepageheader = () => {

    const [token, setToken] = useContext(LoginContext)
    const [username, setUsername] = useState("")

    fetch('https://whispering-wildwood-06588.herokuapp.com/user_info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: token,
        })
    }).then(response => response.json().then(data => {
        setUsername(data.user_info[0]);
    }))

    return (
        <View style={styles.layout}>
            <Text style={styles.title}>WELCOME TO YOUR GARDONE,</Text>
            <Text style={styles.name}>{username}</Text>
        </View>
    )
};

export default Homepageheader;


const styles = StyleSheet.create({

    layout: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        backgroundColor: '#fdb913',
        height: 100,
        width: '100%',
        borderRadius: 15,
        padding: 20,
        marginBottom: '3%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.30,
        shadowRadius: 1.5,
    },

    title: {
        fontSize: 17,
        color: 'black',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '500',
    },

    name: {
        fontSize: 28,
        color: '#0000c8',
        fontWeight: '800',
    },
});


