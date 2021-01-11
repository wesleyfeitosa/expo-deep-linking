import React from "react";
import { View, Button } from "react-native";
import { StackScreenProps } from '@react-navigation/stack';

import {RootStackParamList} from '../../App';

type Props = StackScreenProps<RootStackParamList, 'Notifications'>

export default function NotificationsScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}