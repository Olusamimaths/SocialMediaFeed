import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import {Routes} from './routes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text, View} from 'react-native';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

const Tab2 = () => {
  return (
    <View>
      <Text>This is the tab 2</Text>
      <Text>This is the tab 2</Text>
      <Text>This is the tab 2</Text>
      <Text>This is the tab 2</Text>
      <Text>This is the tab 2</Text>
      <Text>This is the tab 2</Text>
      <Text>This is the tab 2</Text>
    </View>
  );
};

const Tab3 = () => {
  return (
    <View>
      <Text>This is the tab 3</Text>
    </View>
  );
};

export const ProfileTabNavigation = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tarBarStyle: {
          elevation: 0,
          zIndex: 0,
        },
      }}>
      <ProfileTabs.Screen
        name="Tab1"
        component={Tab2}
        options={{
          tabBarLabel: ({focused}) => {
            return <ProfileTabTitle title="Photos" isFocused={focused} />;
          },
        }}
      />
      <ProfileTabs.Screen
        name="Tab2"
        component={Tab2}
        options={{
          tabBarLabel: ({focused}) => {
            return <ProfileTabTitle title="Videos" isFocused={focused} />;
          },
        }}
      />
      <ProfileTabs.Screen
        name="Tab3"
        component={Tab3}
        options={{
          tabBarLabel: ({focused}) => {
            return <ProfileTabTitle title="Saved" isFocused={focused} />;
          },
        }}
      />
    </ProfileTabs.Navigator>
  );
};

const ManinMenuNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{
        headerShown: false,
        header: () => null,
      }}>
      <Stack.Screen name={'Drawer'} component={ManinMenuNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
