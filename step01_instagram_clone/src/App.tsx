/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import HomeScreenComp from './Screens/HomeScreen/index';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView style={{height: '100%'}}>
        <HomeScreenComp />
      </SafeAreaView>
    </>
  );
};

export default App;
