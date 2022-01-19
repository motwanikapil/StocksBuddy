import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NavigationStack from './navigation'
import CurrencyScreen from './Screens/CurrencyScreen'
import HomeScreen from './Screens/HomeScreen'
import MutualFundsScreen from './Screens/MutualFundsScreen'

export default function App() {
  return <NavigationStack />
}
