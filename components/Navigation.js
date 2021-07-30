import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calendar from '../pages/Calendar'
import Pomodoro from '../pages/Pomodoro'
import Homepage from '../pages/Homepage'
import TodoList from '../pages/TodoList'
import Rewards from '../pages/Rewards'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Bottom = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Bottom.Navigator tabBarOptions={{
            activeTintColor: '#0000c8',
            inactiveTintColor: '#CCCCCC',
        }}>

            <Bottom.Screen name="Home" component={Homepage}
                options={{

                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={30} />
                    ),
                }}
            />
            <Bottom.Screen name="Pomodoro" component={Pomodoro}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="clock-check" color={color} size={size} />
                    ),
                }}
            />
            <Bottom.Screen name="Calendar" component={Calendar}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="calendar-today" color={color} size={size} />
                    ),
                }}
            />
            <Bottom.Screen name="ToDos" component={TodoList}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-check" color={color} size={size} />
                    ),
                }}
            />
            <Bottom.Screen name="Rewards" component={Rewards}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="medal" color={color} size={size} />
                    ),
                }}
            />
        </Bottom.Navigator>
    );
}

