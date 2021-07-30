import React, { useState, useContext } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { Formik } from 'formik';
import { LoginContext } from '../LoginContext';

const Adddeadline = ({ setIsModalVisible, setItems }) => {

    const [token, setToken] = useContext(LoginContext)
    const [description, setdescription] = useState('');
    const [subject, setSubject] = useState('');
    const [date, setdate] = useState('');

    return (
        <Formik
            initialValues={{ description: '', subject: '', date: '' }}
            onSubmit={values => sendData(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <InputBox
                        label="Text"
                        placeholder="Chapter 1 paragraph"
                        onChangeText={handleChange('description')}
                        onBlur={handleBlur('description')}
                        value={values.description}
                        onChange={e => setdescription(e.target.value)}
                    />
                    <InputBox
                        label="Subject"
                        placeholder="Mathematics"
                        onChangeText={handleChange('subject')}
                        onBlur={handleBlur('subject')}
                        value={values.subject}
                        onChange={e => setSubject(e.target.value)}
                    />
                    <InputBox
                        label="Due date and time"
                        placeholder="2021-07-27"
                        onChangeText={handleChange('date')}
                        onBlur={handleBlur('date')}
                        value={values.date}
                        onChange={e => setdate(e.target.value)}
                    />
                    <Button title="Submit" color='#0000c8' onPress={async () => {
                        values.user_id = token
                        console.log(values)
                        const response = await fetch("https://whispering-wildwood-06588.herokuapp.com/add_deadline", {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(values)
                        }).then(response => response.json().then(data => {

                            console.log(data);
                            setIsModalVisible(false);
                            const newObject = {}
                            data.deadlines.map(deadline => {
                                console.log(deadline.date)
                                newObject[deadline.deadline_date] = [{ name: deadline.description, subject: deadline.subject }]
                            })
                            console.log("safdsafadsf", newObject)
                            setItems(newObject);
                        }));
                    }
                    } />
                </View>
            )}
        </Formik>
    );
};

export const InputBox = (props) => {

    return (
        <View>
            <Text style={{
                paddingVertical: 10,
                paddingHorizontal: 0,
                fontSize: 18
            }}>
                {props.label}
            </Text >
            <TextInput
                style={{
                    padding: 8,
                    backgroundColor: '#f5f5f5',
                    width: '100%',
                }}
                onChangeText={props.onChangeText}
                value={props.value}
                placeholder={props.placeholder}
            />
        </View>
    )
}

export default Adddeadline;


