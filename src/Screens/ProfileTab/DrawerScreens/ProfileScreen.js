import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import User from '../../../Components/ProfileComponents/User';
import ProfileInfo from '../../../Components/ProfileComponents/ProfileInfo';

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>

    <View style={styles.container}>
      <View style={styles.UserDetails}>
        <User></User>

        <ProfileInfo></ProfileInfo>

      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#FFFFFF',
    height: Constants.statusBarHeight
  },
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  UserDetails: {
    flex: 1,
    marginHorizontal: 25,
    alignContent: 'center',
  },
  editProfile: {
    alignSelf: 'center',
    paddingVertical: 15,
  },
});

export default ProfileScreen;