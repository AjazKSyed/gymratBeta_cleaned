import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import MischeifCalls from '/Users/ajazsyed/Desktop/GymRat/GymRat Beta (cleaned)/gymratBeta_cleaned/src/Components/MischeifComponents/MischeifCalls.js';

const MischeifScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      {/* <TopBarMischeif></TopBarMischeif> */}
      <View style={styles.Details}>
        <MischeifCalls></MischeifCalls>
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
    alignContent: 'center',
  },
});

export default MischeifScreen;