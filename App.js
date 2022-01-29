/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { Provider } from 'react-redux';

import React from 'react';
import { Navigation } from '../movies-app/src/navigation';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Text,
  
} from 'react-native';

import store from './src/redux/store';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Provider store={store}>
      <Navigation />
      </Provider>
    </>
  );
};


export default App;
