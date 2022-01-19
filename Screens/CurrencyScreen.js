import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import BottomTabsComponent from '../components/Home/BottomTabsComponent'
import Header from '../components/Home/Header'

const CurrencyScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text>Currency Screen</Text>
      <BottomTabsComponent navigation={navigation} active='Currency' />
    </SafeAreaView>
  )
}

export default CurrencyScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
})
