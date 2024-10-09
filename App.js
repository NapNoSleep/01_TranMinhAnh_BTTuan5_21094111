import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Screen1 from './screens/Screen_01';
import Screen2 from './screens/Screen_02';
export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Screen1"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Screen_01" component={Screen1} />
        <Stack.Screen name="Screen_02" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}