import React from 'react';
import {
  CreatePostScreen,
  DiscorveryScreen,
  NotificationsScreen,
  ProfileScreen,
} from '../Screens';

import FoundationIcon from 'react-native-vector-icons/Foundation';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeRoute from './../Routes/HomeRoute';

const Tab = createBottomTabNavigator();
const HomBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          if (route.name === 'Home') {
            if (focused) {
              return <FoundationIcon name="home" {...{size, color}} />;
            } else {
              return <FeatherIcon name="home" {...{size, color}} />;
            }
          }
          if (route.name === 'Discovery') {
            return <FeatherIcon name="search" {...{size, color}} />;
          }
          if (route.name === 'CreatePost') {
            return <FeatherIcon name="plus-square" {...{size, color}} />;
          }
          if (route.name === 'Notifications') {
            const notiName = focused ? 'heart' : 'heart-o';

            return <FontAwesomeIcon name={notiName} {...{size, color}} />;
          }
          if (route.name === 'Profile') {
            if (focused) {
              return (
                <MaterialCommunityIcon
                  name="account-circle"
                  {...{size, color}}
                />
              );
            } else {
              return (
                <MaterialCommunityIcon
                  name="account-circle-outline"
                  {...{size, color}}
                />
              );
            }
          }
        },
      })}
      tabBarOptions={{showLabel: false, activeTintColor: '#000'}}>
      <Tab.Screen name="Home" component={HomeRoute} />
      <Tab.Screen name="Discovery" component={DiscorveryScreen} />
      <Tab.Screen name="CreatePost" component={CreatePostScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomBottomTab;
