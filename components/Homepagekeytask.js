
import React, { useState, useContext} from 'react';
import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native';
import { LoginContext } from '../LoginContext';
import { useFocusEffect } from '@react-navigation/native';

const Homepagekeytask = () => {

    const [latestTodo, setLatesttodo] = useState([])
    const [token, setToken] = useContext(LoginContext)

    useFocusEffect(
        React.useCallback(() => {
            fetch("https://whispering-wildwood-06588.herokuapp.com/todolist_homepage", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: token,
                    date_today: new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
                })
            }).then(response => response.json().then(data => {
                setLatesttodo(data.todolist_homepage);
            }));
            return () => { };
        }, []));

    return (
        <View style={styles.layout}>

            <View style={styles.subtitle}>
                <Text style={styles.subtitleText}>COMPLETE SOME TASKS TODAY!</Text>
            </View>

            <ScrollView horizontal>

                {latestTodo.map((todo, index) => {
                    return <View key={index} style={styles.pageBox}>

                        <Text style={styles.boxText}>{todo.todo_text.toUpperCase()}</Text>
                    </View>
                }).reverse()}
            </ScrollView>
        </View>
    )
};

export default Homepagekeytask;

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
        marginBottom: 10,
        alignItems: 'center',
    },

    pageBox: {
        height: 100,
        width: 150,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 10,
        marginHorizontal: 10,
        padding: 10,
        justifyContent: 'center',
    },

    boxText: {
        color: '#0000c8',
        fontWeight: '500',
        fontSize: 14,
    },

});


