import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import BottomTabsComponent from '../components/Home/BottomTabsComponent'
import Header from '../components/Home/Header'
import NiftySensexComponent from '../components/Home/NiftySensexComponent'
import TopGainersComponent from '../components/Home/TopGainersComponent'
import TopLosersComponent from '../components/Home/TopLosersComponent'
import TopStockNewsComponent from '../components/Home/TopStockNewsComponent'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FAFCFF' }}>
      <ScrollView style={styles.container}>
        <Header />
        <NiftySensexComponent />
        <TopGainersComponent />
        <TopLosersComponent />
        <TopStockNewsComponent />
      </ScrollView>
      <BottomTabsComponent navigation={navigation} active='Stocks' />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
})
