import React, { useState, useContext } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card, Avatar } from 'react-native-paper';
import ModalAdddeadline from '../components/ModalAdddeadline';
import { LoginContext } from '../LoginContext';
import { useFocusEffect } from '@react-navigation/native';

type Item = {
    name: string;
    subject: string;
};

const iconselector = (subject) => {
    if (subject.toLowerCase() == 'math' || subject.toLowerCase() == 'mathematics') {
        return "math-compass"
    }
    else if (subject.toLowerCase() == 'english' || subject.toLowerCase() == 'french') {
        return "format-letter-case"
    }
    else if (subject.toLowerCase() == 'music' || subject.toLowerCase() == 'musical') {
        return "music"
    }
    else if (subject.toLowerCase() == 'bio' || subject.toLowerCase() == 'biology') {
        return "tree"
    }
    else if (subject.toLowerCase() == 'bio' || subject.toLowerCase() == 'biology') {
        return "tree"
    }
    else if (subject.toLowerCase() == 'hist' || subject.toLowerCase() == 'history') {
        return "history"
    }
    else if (subject.toLowerCase() == 'hist' || subject.toLowerCase() == 'history') {
        return "history"
    }
    else {
        return "school"
    }
}

const Calendar: React.FC = () => {

    const [token, setToken] = useContext(LoginContext)

    const [request, setRequest] = useState([])

    const [items, setItems] = useState<{ [key: string]: Item[] }>(
        {
            '2021-07-27': [{ name: 'test 1', subject: 'english' }]
        });


    useFocusEffect(
        React.useCallback(() => {
            fetch("https://whispering-wildwood-06588.herokuapp.com/deadlines", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: token,

                })
            }).then(response => response.json().then(data => {

                console.log(data.deadlines)
                const newObject = {}
                data.deadlines.map(deadline => {
                    console.log(deadline.date)
                    newObject[deadline.deadline_date] = [{ name: deadline.description, subject: deadline.subject }]
                })
                console.log("safdsafadsf", newObject)
                setItems(newObject);
            })
            );
            return () => { };

        }, []));

    const renderItem = (item: Item) => {
        return (
            <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
                <Card style={{ backgroundColor: '#fdb913' }}>
                    <Card.Content>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <Text>{item.name}</Text>
                            <Text>{item.subject}</Text>
                            <Avatar.Icon size={40} icon={iconselector(item.subject)} color='#fdb913' backgroundColor='#0000c8' />
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.safe}>
            <Agenda
                items={items}
                renderItem={renderItem}
                theme={{
                    agendaTodayColor: '#0000c8',
                    agendaDayTextColor: 'gray',
                    agendaDayNumColor: 'gray',
                    backgroundColor: '#ffffff',
                    calendarBackground: '#ffffff',
                    textSectionTitleColor: '#0000c8',
                    selectedDayBackgroundColor: '#fdb913',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#0000c8',
                    dayTextColor: '#0000c8',
                    textDisabledColor: '#0000c8',
                    dotColor: '#fdb913',
                    selectedDotColor: '#ffffff',
                    arrowColor: 'orange',
                    monthTextColor: '#0000c8',
                    indicatorColor: '#0000c8',
                    textDayFontWeight: '300',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: '300',
                    textDayFontSize: 16,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 16,
                }}
            />
            <ModalAdddeadline setItems={setItems} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safe: {
        flex: 1,
    },
    itemContainer: {
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});

export default Calendar;