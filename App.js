
// Import React and Component
import React from 'react';
import 'react-native-gesture-handler';
import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';

// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import SplashScreen from './src/Screens/SplashScreen';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import TabNavigator from '/Users/ajazsyed/Desktop/GymRat/GymRat Beta (cleaned)/gymratBeta_cleaned/src/Screens/TabNavigator.js';

// Your Parse initialization configuration goes here
Parse.setAsyncStorage(AsyncStorage);
const PARSE_APPLICATION_ID: string = 'jP9Rl3yLQDq9dUwjkoaSH1huG562IkElylQReiXv';
const PARSE_HOST_URL: string = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_ID: string = 'sq2aUbyyluyUH8foYFH363BRgvcbYlYVnKPqALCb';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_ID);
Parse.serverURL = PARSE_HOST_URL;

const Stack = createStackNavigator();
const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register', //Set Header Title
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

/* Switch Navigator for those screens which needs to be switched only once
  and we don't want to switch back once we switch from them to the next one */
  const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          {/* SplashScreen which will come once for 5 Seconds */}
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            // Hiding header for Splash Screen
            options={{headerShown: false}}
          />
          {/* Auth Navigator which includer Login Signup will come once */}
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{headerShown: false}}
          />
          {/* Navigation Drawer as a landing page */}
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            // Hiding header for Navigation Drawer as we will use our custom header
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  export default App;
