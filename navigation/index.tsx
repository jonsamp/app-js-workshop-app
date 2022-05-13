import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import { SettingsScreen } from '../screens/SettingsScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootStack.Navigator>
        <RootStack.Screen
          name='home'
          component={HomeScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('settings')}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <FontAwesome
                  name='gear'
                  size={25}
                  color={colorScheme ? Colors[colorScheme].text : '#000'}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            ),
          })}
        />
        <RootStack.Screen
          name='NotFound'
          component={NotFoundScreen}
          options={{ title: 'Oops!' }}
        />
        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen name='settings' component={SettingsScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
