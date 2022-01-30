
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { MovieDetailScreen } from '../screens/detail';
import { HomeScreen } from '../screens/home';
import { MoviesList } from '../screens/movies-list';
import { SearchScreen } from '../screens/search';

import { NAVIGATION_ROUTES } from '../utils';

const Stack = createStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={NAVIGATION_ROUTES.HOME}
            >
                <Stack.Screen options={{ headerShown: false }} name={NAVIGATION_ROUTES.MOVIES_LIST} component={MoviesList} />
                <Stack.Screen name={NAVIGATION_ROUTES.DETAIL} component={MovieDetailScreen} options={{ headerShown: false }} />
                <Stack.Screen name={NAVIGATION_ROUTES.HOME} component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name={NAVIGATION_ROUTES.SEARCH} component={SearchScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}