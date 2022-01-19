import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const BottomTabsComponent = ({ active, navigation }) => {
  const [activeState, setActiveState] = useState(active)
  return (
    <View style={styles.container}>
      <TabComponent
        icon={
          activeState === 'Stocks'
            ? 'https://cdn-icons.flaticon.com/png/128/3281/premium/3281306.png?token=exp=1642272114~hmac=72f08a4b7b00c7c9aba080399ed22015'
            : 'https://cdn-icons.flaticon.com/png/512/1184/premium/1184773.png?token=exp=1642274129~hmac=09b786fdf82a99917b37bdc8d97035d3'
        }
        title={'Stocks'}
        activeState={activeState}
        style={styles.iconStyle}
        setActiveState={setActiveState}
        screenName={'HomeScreen'}
        navigation={navigation}
      />
      <TabComponent
        icon={
          activeState === 'Mutual Funds'
            ? 'https://cdn-icons-png.flaticon.com/512/603/603148.png'
            : 'https://cdn-icons-png.flaticon.com/512/603/603046.png'
        }
        title={'Mutual Funds'}
        activeState={activeState}
        style={styles.iconStyle}
        setActiveState={setActiveState}
        screenName={'MutualFundsScreen'}
        navigation={navigation}
      />
      <TabComponent
        icon={
          activeState === 'Currency'
            ? 'https://cdn-icons-png.flaticon.com/512/2150/2150150.png'
            : 'https://cdn-icons-png.flaticon.com/512/2150/2150062.png'
        }
        title={'Currency'}
        activeState={activeState}
        style={styles.iconStyle}
        setActiveState={setActiveState}
        screenName={'CurrencyScreen'}
        navigation={navigation}
      />
    </View>
  )
}

const TabComponent = ({
  icon,
  title,
  activeState,
  setActiveState,
  screenName,
  navigation,
}) => (
  <TouchableOpacity
    style={[styles.iconContainerStyle(activeState, title)]}
    onPress={() => {
      setActiveState(title)
      navigation.push(screenName)
    }}
  >
    <Image
      source={{ uri: icon }}
      style={(styles.tabIconStyle(activeState, title), styles.iconStyle)}
    />
    <Text style={styles.tabTitleStyle(activeState, title)}>{title}</Text>
  </TouchableOpacity>
)

export default BottomTabsComponent

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  tabIconStyle: (activeState, title) => {
    return {
      backgroundColor: title === activeState ? '#033141' : '#FAFCFF',
    }
  },
  tabTitleStyle: (activeState, title) => {
    return {
      color: title === activeState ? '#FAFCFF' : '#033141',
    }
  },
  iconStyle: {
    height: 30,
    width: 30,
  },
  iconContainerStyle: (activeState, title) => {
    return {
      width: '33.33%',
      alignItems: 'center',
      backgroundColor: title === activeState ? '#033141' : '#FAFCFF',
      height: 82,
      justifyContent: 'center',
    }
  },
})
