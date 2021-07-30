import React, { useState, useContext } from 'react';
import {
    TouchableOpacity,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
    TextInput,
    Platform,
    Keyboard,
} from 'react-native';
import { LoginContext } from '../LoginContext';

const TodoForm = ({ todos, setTodos }) => {
    const [taskItems, setTaskItems] = useState('');
    const [token, setToken] = useContext(LoginContext)

    const handleSubmit = () => {
        if (taskItems.trim().length != 0) {
            fetch("https://whispering-wildwood-06588.herokuapp.com/add_todo", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: token,
                    todo_text: taskItems,
                })
            }).then(response => response.json().then(data => {

                Keyboard.dismiss();
                setTodos(data.todos);
                setTaskItems("")
                textInput.clear();

            }));
        }
    }

    return (

        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={Platform.OS === "ios" ? "10" : "0"} style={styles.writeTaskWrapper} >
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder={"Write a task"}
                    onChangeText={text => setTaskItems(text.trim())}
                    ref={input => { textInput = input }}
                />
                <TouchableOpacity onPress={() => handleSubmit()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView >

    )
}

const styles = StyleSheet.create({
    writeTaskWrapper: {
        bottom: 35,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 250,
        borderColor: '#0000c8',
        borderWidth: 1,
        width: 250,
        marginHorizontal: 10,
    },

    addWrapper: {
        width: 50,
        height: 50,
        backgroundColor: '#fdb913',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#fdb913',
        borderWidth: 1,
    },

    addText: {
        fontSize: 25,
        color: '#0000c8',
    },

    container: {
        flexDirection: 'row',
    }

});

export default TodoForm;
