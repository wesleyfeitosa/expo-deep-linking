import React, { useCallback, useEffect } from "react";
import { Text } from 'react-native';
import * as Linking from 'expo-linking';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/components/HomeScreen";
import NotificationsScreen from "./src/components/NotificationsScreen";
import ProfileScreen from "./src/components/ProfileScreen";
import SettingsScreen from "./src/components/SettingsScreen";
import LinkingButtonScreen from "./src/components/LinkingButtonScreen";

export type RootStackParamList = {
  Home: { id: string } | undefined;
  Profile: { id: string } | undefined;
  Notifications: undefined;
  Settings: undefined;
  LinkingButton: undefined;
};

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

function MyStack() {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Notifications" component={NotificationsScreen} />
      <Screen name="Profile" component={ProfileScreen} />
      <Screen name="Settings" component={SettingsScreen} />
      <Screen name="LinkingButton" component={LinkingButtonScreen} />
    </Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer fallback={<Text>Loading...</Text>}>
      <MyStack />
    </NavigationContainer>
  );
}