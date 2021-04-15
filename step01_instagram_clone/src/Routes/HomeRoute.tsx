import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {HomeScreen} from '../Screens';
import Logo from './../assets/images/logo.png';
import {Image} from 'react-native';
const HomeStack = createStackNavigator();
import PressableIcon from '../Components/PressableIcon';

const HomeRoute = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Instagram',
          headerLeft: () => (
            <PressableIcon
              onClick={() => {
                console.warn('camera');
              }}
              name="camera"
              size={25}
              iconType="Feather"
            />
          ),
          headerRight: () => (
            <PressableIcon
              onClick={() => {
                console.warn('send');
              }}
              name="send"
              size={25}
              iconType="Feather"
            />
          ),
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerRightContainerStyle: {
            marginRight: 15,
          },
          // headerTitle: () => (
          //   <Image source={Logo} resizeMode="contain" style={{width: 135}} />
          // ),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Fontspring-Regular',
            fontSize: 28,
          },
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeRoute;
