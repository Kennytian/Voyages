import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './home';

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
});

export default createAppContainer(AppNavigator);
