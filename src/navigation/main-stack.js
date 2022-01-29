
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { MovieDetailScreen } from '../screens/detail';
import { HomeScreen } from '../screens/home';
import { MoviesList } from '../screens/movies-list';


const Stack = createStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={'Home'}
            >
                <Stack.Screen options={{headerShown:false}} name="MoviesTab" component={MoviesList}/>
                <Stack.Screen name="Detail" component={MovieDetailScreen} options={{headerShown:false}} />
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}