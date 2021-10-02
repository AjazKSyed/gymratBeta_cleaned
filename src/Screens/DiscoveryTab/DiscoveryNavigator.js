
// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import DiscoveryScreen from './DiscoveryScreen';

const Stack = createStackNavigator();

const DiscoveryScreenNavigator = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="DiscoveryScreen">
      <Stack.Screen
        name="DiscoveryScreen"
        component={DiscoveryScreen}
        options={{
          title: 'Discovery', //Set Header Title
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


export default DiscoveryScreenNavigator;
