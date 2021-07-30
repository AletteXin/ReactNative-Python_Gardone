import React, { useState, useContext } from 'react';
import Task from '../components/Task';
import TodoForm from '../components/TodoForm';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { LoginContext } from '../LoginContext';
import Todobunny from '../components/Todobunny';
import { useFocusEffect } from '@react-navigation/native';

export default function TodoList() {
    
    const [todos, setTodos] = useState([]);
    const [token, setToken] = useContext(LoginContext)

    useFocusEffect(
        React.useCallback(() => {
        fetch("https://whispering-wildwood-06588.herokuapp.com/todos", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: token,

            })
        }).then(response => response.json().then(data => {
            setTodos(data.todos);
        }));
            return () => { 
                fetch("https://whispering-wildwood-06588.herokuapp.com/todos", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user_id: token,
                    })
                }).then(response => response.json().then(data => {
                    setTodos(data.todos);
                }));
            };
        }, []));

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.tasksWrapper}>
                    <Text style={styles.title}>TODO LIST</Text>
                    <Task todos={todos} setTodos={setTodos} />
                </View>
            </ScrollView>
            <Todobunny />
            <TodoForm todos={todos} setTodos={setTodos} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },

    tasksWrapper: {
        marginTop: '15%',
        paddingHorizontal: 20,
    },

    title: {
            height: 30,
            width: '100%',
            paddingHorizontal: 20,
            fontSize: 25,
            fontWeight: '500',
            justifyContent: 'center',
            textAlign: 'center',
    },
    
});
