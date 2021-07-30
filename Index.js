import React, { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './components/Navigation'
import Login from './pages/Login';
import Signup from './pages/Signup';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginContext } from './LoginContext';

export default function Index() {

  const Stack = createStackNavigator();
  const [loggedIn, setLoggedIn] = useState(false)
  const [token, setToken] = useContext(LoginContext)

  return (
    
      <NavigationContainer >
        {(typeof token) != 'number' ?
          <Stack.Navigator headerMode='none'>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="SignUp" component={Signup} />
          </Stack.Navigator>
          :
          <Stack.Navigator headerMode='none'>
            <Stack.Screen name="Main" component={Navigation} />
          </Stack.Navigator>
        }
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

});

