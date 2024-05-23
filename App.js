import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Importación de las pantallas */
import ColorCard from './src/screens/ColorCard';
import ColorsScreen from './src/screens/ColorsScreen';

// Crear un Stack Navigator
const StackNavigator = createNativeStackNavigator();

// Pantalla de navegación en pila
function MainStackNavigator() {
  return (
    <StackNavigator.Navigator
      initialRouteName="ColorCardScreen"
      screenOptions={{
        headerShown: false
      }}
    >
      <StackNavigator.Screen name="ColorCardScreen" component={ColorCard} />
      <StackNavigator.Screen name="ColorsScreen" component={ColorsScreen} />
    </StackNavigator.Navigator>
  );
}

// Crear un Tab Navigator
const TabNavigator = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator>
        <TabNavigator.Screen name="ColorsScreen" component={ColorsScreen} />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});
