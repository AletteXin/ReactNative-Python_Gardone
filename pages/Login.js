import React, { useState, useContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { Octicons, Ionicons } from '@expo/vector-icons';
import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink
} from '../components/styles';
import { View, Button, KeyboardAvoidingView, Platform } from 'react-native';
import { LoginContext } from '../LoginContext';
const { brand, darkLight, primary } = Colors;

import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

const Login = () => {

    const [hidePassword, setHidePassword] = useState(true);
    const [email, changeEmail] = useState("")
    const [password, changePassword] = useState("")
    const [currentUser, updateCurrentUser] = useState(undefined)
    const nav = useNavigation();
    const [token, setToken] = useContext(LoginContext)

    const login = (email, password) => {

        fetch('https://whispering-wildwood-06588.herokuapp.com/user_login', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: password,
                email: email,
            })
        }).then(response => response.json().then(data => {
            setToken(data.user_id);
        }))

    }

    return (
  
        <KeyboardAvoidingWrapper >
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={Platform.OS === "ios" ? "2" : "0"} >
                <StyledContainer>
                    <StatusBar style="dark" />
                    <InnerContainer>
                        <PageLogo resizeMode='cover' source={require('./../assets/Shoots.png')} />
                        <PageTitle>Gardone</PageTitle>
                        <SubTitle>Account Login</SubTitle>
                        <Formik
                            initialValues={{ useremail: '', password: '' }}
                            onSubmit={(values) => {
                                console.log(values);
                                changeEmail(values.useremail);
                                changePassword(values.password);
                                login(values.useremail, values.password);
                            }}
                        >
                            {({ values, handleChange, handleBlur, handleSubmit }) => (
                                <StyledFormArea>
                                    <MyTextInput

                                        label="Email Address :"
                                        icon="mail"
                                        placeholder="johnsmith@email.com"
                                        placeholderTextColor={darkLight}
                                        onChangeText={handleChange('useremail')}
                                        onBlur={handleBlur('useremail')}
                                        value={values.useremail}
                                        keyboardType="email-address"
                                    />

                                    <MyTextInput
                                        label="Password :"
                                        icon="lock"
                                        placeholder="* * * * * * * *"
                                        placeholderTextColor={darkLight}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        secureTextEntry={hidePassword}
                                        isPassword={true}
                                        hidePassword={hidePassword}
                                        setHidePassword={setHidePassword}
                                    />
                                    <MsgBox>...</MsgBox>
                                    <StyledButton onPress={handleSubmit}>
                                        <ButtonText>Login</ButtonText>
                                    </StyledButton>
                                    <Line />
                                    <ExtraView>
                                        <ExtraText>Don't have an account already?</ExtraText>
                                        <TextLink>
                                            <Button title='Sign Up' onPress={() => nav.navigate('SignUp')} />
                                        </TextLink>
                                    </ExtraView>
                                </StyledFormArea>
                            )}
                        </Formik>
                    </InnerContainer>
                </StyledContainer >
            </KeyboardAvoidingView>
            </KeyboardAvoidingWrapper>
       
    );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    );
};

export default Login;
