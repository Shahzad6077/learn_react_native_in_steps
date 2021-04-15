import React, {useEffect} from 'react';
import {View} from 'react-native';
import Feed from '../../Components/Feed';

const HomeScreen = () => {
  useEffect(() => {
    console.warn('Baby');
  });
  return (
    <View style={{flex: 1}}>
      <Feed />
    </View>
  );
};
export default HomeScreen;
