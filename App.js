/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { Provider } from 'react-redux';

import React from 'react';
import {  Platform } from 'react-native';
import { Navigation } from '../movies-app/src/navigation';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Text,
  
} from 'react-native';

import store from './src/redux/store';

import {
  setCustomText,
} from 'react-native-global-props';

// Setting default styles for all Text components.
const customTextProps = {
  style: {
    fontFamily: Platform.OS === 'ios' ? 'baskerville' : 'notoserif',
  }
};


setCustomText(customTextProps);

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
