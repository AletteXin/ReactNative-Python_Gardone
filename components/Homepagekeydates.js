
import React, { useState, useContext} from 'react';
import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native';
import { LoginContext } from '../LoginContext';
import { useFocusEffect } from '@react-navigation/native';


const Homepagekeydates = () => {

    const [latestDeadline, setLatestdeadline] = useState([])
    const [token, setToken] = useContext(LoginContext)

    const month_today = new Date().getMonth() + 1

    useFocusEffect(
        React.useCallback(() => {
            fetch("https://whispering-wildwood-06588.herokuapp.com/deadline_homepage", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: token,
                    date_today: new Date().getFullYear() + '-' + month_today + '-' + new Date().getDate(),
                })
            }).then(response => response.json().then(data => {
                setLatestdeadline(data.deadline_homepage);
            }));
            return () => { };
        }, []));

    return (
        <View style={styles.layout}>
            <View style={styles.subtitle}>
                <Text style={styles.subtitleText}>YOUR UPCOMING KEY DATES</Text>
            </View>
            <ScrollView>
                {latestDeadline.map((deadline, index) => {
                    return <View key={index} style={styles.display}>

                        <View style={styles.line}></View>
                        <View style={styles.circle}>
                            <Text style={styles.date}> {deadline.date} </Text>
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

    circle: {
        height: 90,
        width: 90,
        borderRadius: 100,
        backgroundColor: '#0000c8',
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },

    line: {
        height: 120,
        width: 7,
        backgroundColor: '#fdb913',
        marginVertical: '-5%',
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



