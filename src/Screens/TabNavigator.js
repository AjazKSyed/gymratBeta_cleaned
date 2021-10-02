import 'react-native-gesture-handler';

// Import React and Component
import React from 'react';
import { Image, View } from 'react-native';

// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Import Screens
import DiscoveryNavigator from '/Users/ajazsyed/Desktop/GymRat/GymRat Beta (cleaned)/gymratBeta_cleaned/src/Screens/DiscoveryTab/DiscoveryNavigator.js'
import MischeifNavigator from '/Users/ajazsyed/Desktop/GymRat/GymRat Beta (cleaned)/gymratBeta_cleaned/src/Screens/MischeifTab/MischeifNavigator.js'
// Drawer Nav is the nav for the profile tabs
import DrawerNavigationRoutes from './ProfileTab/DrawerNavigationRoutes';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
     <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: 'white',
            height: 80,
            marginBottom: 5,
            marginTop: 5,
            paddingTop: 25,
            paddingBottom: 25,
          },
          activeTintColor: "#8D68AD",
          inactiveTintColor: "#9B9B9B",
        }}>

        <Tab.Screen name="Profile"
          component={DrawerNavigationRoutes}
          options={{
            tabBarIcon: ({focused}) => {
                if(focused) {
                  return(<Image style={{ width: 40, height: 40 }} source={require('/Users/ajazsyed/Desktop/GymRat/GymRat Beta (cleaned)/gymratBeta_cleaned/assets/Profile-active.png')}/>);
                } else {
                  return(<Image style={{ width: 40, height: 40 }} source={require('/Users/ajazsyed/Desktop/GymRat/GymRat Beta (cleaned)/gymratBeta_cleaned/assets/Profile-inactive.png')}/>);
                }
            },
          }}
        />
        <Tab.Screen name="Discovery"
          component={DiscoveryNavigator}
          options={{
            tabBarIcon: ({focused}) => {
                if(focused) {
                  return(<Image style={{ width: 40, height: 40 }} source={require('/Users/ajazsyed/Desktop/GymRat/GymRat Beta (cleaned)/gymratBeta_cleaned/assets/Discovery-active.png')}/>);
                } else {
                  return(<Image style={{ width: 40, height: 40 }} source={require('/Users/ajazsyed/Desktop/GymRat/GymRat Beta (cleaned)/gymratBeta_cleaned/assets/Discovery-inactive.png')}/>);
                }
            },
          }}
        />
        <Tab.Screen name="Mischeif"
          component={MischeifNavigator}
          options={{
            tabBarIcon: ({focused}) => {
                if(focused) {
                  return(<Image style={{ width: 40, height: 40 }} source={require('/Users/ajazsyed/Desktop/GymRat/GymRat Beta (cleaned)/gymratBeta_cleaned/assets/Mischeif-active.png')}/>);
                } else {
                  return(<Image style={{ width: 40, height: 40 }} source={require('/Users/ajazsyed/Desktop/GymRat/GymRat Beta (cleaned)/gymratBeta_cleaned/assets/Mischeif-inactive.png')}/>);
                }
            },
          }}
        />
      </Tab.Navigator>


  );
}
