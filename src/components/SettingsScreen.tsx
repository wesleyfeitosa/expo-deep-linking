  
import React from "react";
import { View, Button } from "react-native";
import { StackScreenProps } from '@react-navigation/stack';

import {RootStackParamList} from '../../App';

type Props = StackScreenProps<RootStackParamList, 'Settings'>

export default function SettingsScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go Linking Buttons"
        onPress={() => navigation.navigate("LinkingButton")}
      />
    </View>
  );
}