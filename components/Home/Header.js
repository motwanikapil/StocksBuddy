import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.iconStyle}
      />
      <Text style={styles.headerStyle}>StocksBuddy 🙋🏻‍♂️</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginLeft: 10,
  },
  headerStyle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#033141',
  },
  iconStyle: {
    height: 30,
    width: 30,
    marginRight: 7,
  },
})
