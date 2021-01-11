import React, { useCallback, useEffect } from "react";
import { View, Button } from "react-native";
import * as Linking from 'expo-linking';
import { StackScreenProps } from '@react-navigation/stack';

import {RootStackParamList} from '../../App';

type Props = StackScreenProps<RootStackParamList, 'Profile'>

export default function HomeScreen({ navigation }: Props) {

  useEffect(() => {
    Linking.getInitialURL().then(urlRedirect);

    Linking.addEventListener('url', event => {
      urlRedirect(event.url);
    });

    return () => {
      Linking.removeEventListener('url', event => {
        urlRedirect(event.url);
      })
    };
  }, []);

  const urlRedirect = useCallback((url) => {
    if(!url) return;

    let { path, queryParams } = Linking.parse(url);
    console.log(`Linked to app with path: ${path} and data: ${JSON.stringify(queryParams)}`);
    
    if (path != null && path === 'profile') {
      navigation.navigate("Profile", {
        id: queryParams?.id || '',
      })
    }
    if (path != null && path === 'settings') {
      navigation.navigate("Settings")
    }
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile", { id: '1' })}
      />
    </View>
  );
}