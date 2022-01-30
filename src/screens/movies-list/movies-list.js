import React from 'react';
import { Text, View } from 'react-native';
import { PopularMovies } from './popular';
import { TrendingMovies } from './trending';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


export const MoviesList = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Popular" component={PopularMovies} />
      <Tab.Screen name="Trending" component={TrendingMovies} />
    </Tab.Navigator>

  )
};
