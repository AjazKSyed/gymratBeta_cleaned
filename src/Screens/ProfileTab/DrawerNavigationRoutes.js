
// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import ProfileScreen from './DrawerScreens/ProfileScreen';
import EditProfileScreen from './DrawerScreens/EditProfileScreen';
import SettingsScreen from './DrawerScreens/SettingScreen';
import CustomSidebarMenu from '../ExtraComponents/CustomSidebarMenu';
import NavigationDrawerHeader from '../ExtraComponents/NavigationDrawerHeader';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const settingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#362148', //Set Header color
          height: 100,
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
          fontSize: 20,
        },
      }}>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const profileScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Profile', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#362148', //Set Header color
            height: 100,
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const EditProfileScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="EditProfileScreen">
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{
          title: 'Edit Profile', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#362148', //Set Header color
            height: 100,
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#D8BFD8',
        color: '#D8BFD8',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#E6E6FA',
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="profileScreenStack"
        options={{drawerLabel: 'Profile'}}
        component={profileScreenStack}
      />
      <Drawer.Screen
        name="settingScreenStack"
        options={{drawerLabel: 'Setting'}}
        component={settingScreenStack}
      />
      <Drawer.Screen
        name="EditProfileScreenStack"
        options={{drawerLabel: 'Edit Profile'}}
        component={EditProfileScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
