
import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button, Image, Text, Pressable, Dimensions } from 'react-native';
import { LoginContext } from '../LoginContext';

const Homepagekeydates = () => {

    const [latestDeadline, setLatestdeadline] = useState([])
    const [token, setToken] = useContext(LoginContext)


    useEffect(() => {
        fetch("http://192.168.1.120:5000/deadline_homepage", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: token,
                date_today: new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear(),

            })
        }).then(response => response.json().then(data => {

            console.log(data);
            setLatestdeadline(data.deadline_homepage);

        }));
    }, []);

    return (
        <View style={styles.layout}>

            <View style={styles.subtitle}>
                <Text style={styles.subtitleText}>YOUR UPCOMING KEY DATES</Text>
            </View>

            <ScrollView horizontal>

                {latestDeadline.map((deadline, index) => {
                    return <View style={styles.display}>
                        
                        <View style={styles.line}></View>
                        <View style={styles.circle}>
                        <Text style={styles.date}> {deadline.date.toUpperCase()}</Text>
                        </View>

                        <View style={styles.rectangle}>
                        <Text style={styles.subject}>{deadline.subject.toUpperCase()}</Text>
                        <Text style={styles.description}>{deadline.description}</Text>
                        </View>
                    </View>
                })}
            </ScrollView>
        </View>

    )
};


export default Homepagekeydates;


// Styles
const styles = StyleSheet.create({

    layout: {
        flex: 1,
        height: "50%",
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

    title: {
        fontSize: 16,
        color: 'black',
        fontWeight: '500',
        marginBottom: 10,
    },


    subtitleText: {
        fontSize: 14,
        color: 'white',
        borderRadius: 18,
        justifyContent: 'flex-start',
        fontWeight: "500",
        fontStyle: 'italic',
    },
    // #fdb913
    // #0000c8

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

    pageBox: {
        height: 80,
        width: 220,
        backgroundColor: 'lightgray',

    },

    circle: {
        height: 80,
        width: 80,
        borderRadius: 100,
        backgroundColor: '#0000c8',
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },

    line: {
        height: 100,
        width: 7,
        backgroundColor: '#fdb913',
        marginTop: '-5%',
        justifyContent: 'center',
    },

    display: {
        flexDirection: 'row',
        margin: 10,
    },

    rectangle: {
        width: 200,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },

    subject: {
        fontSize: 14,
        fontWeight: '500',

    },

    description: {
        fontSize: 14,

    },

    date: {
        color: 'white',
        fontSize: 15,
    }


});



