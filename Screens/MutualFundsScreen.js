import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import BottomTabsComponent from '../components/Home/BottomTabsComponent'
import Header from '../components/Home/Header'

const MutualFundsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text>Mutual Funds Screen</Text>
      <BottomTabsComponent navigation={navigation} active='Mutual Funds' />
    </SafeAreaView>
  )
}

export default MutualFundsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
})
