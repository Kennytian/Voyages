import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './home';
import DetailScreen from './detail';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Detail: { screen: DetailScreen },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
