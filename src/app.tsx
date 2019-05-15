import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './home';
import DetailScreen from './detail';
import ForgotPasswordScreen from './auth/forgot-password';
import SignInScreen from './auth/sign-in';

const AuthenticationNavigator = createStackNavigator({
  SignIn: SignInScreen,
  ForgotPassword: ForgotPasswordScreen,
});

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Detail: { screen: DetailScreen },
    Auth: AuthenticationNavigator,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
