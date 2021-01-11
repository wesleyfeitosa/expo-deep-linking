  
import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { StackScreenProps } from '@react-navigation/stack';

import {RootStackParamList} from '../../App';

type Props = StackScreenProps<RootStackParamList, 'Profile'>

const ProfileScreen = ({ route, navigation }: Props) => {
  const {
    params,
  } = route;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {params?.id != '1' && <Text style={styles.attributeTitle}>Deeplink id = {params?.id}</Text>}
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate("Notifications")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};
const styles = StyleSheet.create({
  attributeTitle: {
    padding: 20,
    color: "#e4002b",
  },
});
export default ProfileScreen;