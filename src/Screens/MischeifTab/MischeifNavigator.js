
// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import MischeifScreen from './MischeifScreen';

const Stack = createStackNavigator();

const MischeifScreenNavigator = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="MischeifScreen">
      <Stack.Screen
        name="MischeifScreen"
        component={MischeifScreen}
        options={{
          title: 'Mischeif', //Set Header Title
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


export default MischeifScreenNavigator;
