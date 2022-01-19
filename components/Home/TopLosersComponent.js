import React from 'react'
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { DATA } from '../../Data/losersData'

const TopLosersComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Top Losers 😞</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {DATA.map((item, index) => (
          <TouchableOpacity
            style={styles.topLoserContainer}
            key={index}
            activeOpacity={0.5}
          >
            <View>
              <Text style={styles.symbolStyle}>{item.symbol}</Text>
              <Text style={styles.nameStyle}>
                {item.name.length > 12
                  ? item.name.slice(0, 13) + '...'
                  : item.name}
              </Text>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.symbolPrice}>{'$' + item.price}</Text>
              <Text style={styles.changeStyle}>{item.change}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default TopLosersComponent

const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginBottom: 25,
  },
  topLoserContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#033141',
    marginRight: 10,
    padding: 25,
    borderRadius: 23,
    alignItems: 'center',
    width: 250,
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: '700',
    color: '#033141',
    marginBottom: 13,
  },
  symbolPrice: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FAFCFF',
  },
  nameStyle: {
    fontSize: 15,
    color: '#FDFFCC',
  },
  symbolStyle: {
    color: '#FAFCFF',
    fontSize: 25,
  },
  changeStyle: {
    color: '#DD0004',
  },
  rightContainer: {
    alignItems: 'center',
  },
})
