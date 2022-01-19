import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const NiftySensexComponent = () => {
  return (
    <View style={styles.container}>
      <Component name='NIFTY 50' value='18,255' change='+1.5%' />
      <Component name='SENSEX' value='61,223' change='-0.020%' />
    </View>
  )
}

const Component = ({ name, value, change }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.componentContainer, styles.elevation]}
    >
      <Text style={styles.nameStyle}>{name}</Text>
      <Text style={styles.changeStyle(change)}>{change}</Text>
      <Text style={styles.valueStyle}>{value}</Text>
    </TouchableOpacity>
  )
}

export default NiftySensexComponent

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 5,
    paddingLeft: 0,
    marginBottom: 20,
  },
  componentContainer: {
    width: '40%',
    backgroundColor: '#033141',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 15,
    borderRadius: 20,
  },
  nameStyle: {
    fontSize: 20,
    color: '#FAFCFF',
    margin: 5,
  },
  valueStyle: {
    fontSize: 30,
    color: '#FAFCFF',
    margin: 5,
  },
  changeStyle: (change) => {
    return {
      fontSize: 15,
      fontWeight: '700',
      color: change.includes('-') ? '#DD0004' : '#3ED625',
      margin: 5,
    }
  },
})
