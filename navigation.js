import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './Screens/HomeScreen'
import MutualFundsScreen from './Screens/MutualFundsScreen'
import CurrencyScreen from './Screens/CurrencyScreen'
const Stack = createStackNavigator()

const screenOptions = {
  headerShown: false,
}

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='HomeScreen'
        screenOptions={screenOptions}
      >
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='MutualFundsScreen' component={MutualFundsScreen} />
        <Stack.Screen name='CurrencyScreen' component={CurrencyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationStack
