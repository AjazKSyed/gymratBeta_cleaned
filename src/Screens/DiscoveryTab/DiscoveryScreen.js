import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import DiscoveryCalls from '../../Components/DiscoveryComponents/DiscoveryCalls';

const DiscoveryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <View style={styles.Details}>
        <DiscoveryCalls></DiscoveryCalls>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  Details: {
    flex: 1,
   },

});

export default DiscoveryScreen;