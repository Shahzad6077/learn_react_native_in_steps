import React from 'react';
import {Text, View} from 'react-native';
import Feed from '../../Components/Feed';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 18, textAlign: 'center'}}>Instagram</Text>
      <Feed />
    </View>
  );
};
export default HomeScreen;
