import React, {useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import Homepagekeytask from '../components/Homepagekeytask';
import Homepagekeydates from '../components/Homepagekeydates';
import Homepagerewards from '../components/Homepagerewards';
import Homepageheader from '../components/Homepageheader';
import Homepagecircle from '../components/Homepagecircle';
import { LoginContext } from '../LoginContext';

const Homepage = () => {

    const [token, setToken] = useContext(LoginContext)

    const logout = (e) => {
        e.preventDefault();
        setToken("")
        console.log(token)
        console.log("token")
    }

    return (
        <ScrollView contentContainerStyle={styles.layout}>
            <Homepagecircle />
            <Homepageheader />
            <Homepagekeytask />
            <Homepagekeydates />
            <Homepagerewards />
            <View style={styles.logoutbutton}>
                <Pressable onPress={(e) => logout(e)} ><Text style={styles.buttontext}>LOGOUT</Text></Pressable>
            </View>
        </ScrollView>
    );
}

export default Homepage;

const styles = StyleSheet.create({
    layout: {
        flexGrow: 3,
        marginTop: "15%",
        margin: "5%",
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoutbutton: {
        height: 50,
        width: 170,
        margin: 30,
        textAlign: 'center',
        marginBottom: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'lightgray',
    },

    buttontext: {
        color: 'gray',
        fontWeight: '500',
    },

});
