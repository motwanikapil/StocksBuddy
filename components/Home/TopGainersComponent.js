import React, { useEffect, useState } from 'react'
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { FINANCIAL_MODELING_PREP_KEY } from '../../keys'

const TopGainersComponent = ({ gainerData }) => {
  const [gainersData, setGainersData] = useState(gainerData)

  //   const getDataForGainers = () => {
  //     fetch(
  //       `https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=ef8453a632ea893d749e36321583cf19`
  //     )
  //       .then((response) => response.json())
  //       .then((responseJson) => setGainersData(responseJson))
  //       .catch((error) => {
  //         console.error(error)
  //       })
  //   }

  // useEffect(() => {
  //   fetch(
  //     'https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=ef8453a632ea893d749e36321583cf19'
  //   ).then((response) => response.json()).then((responseJson) => { setGainersData(responseJson) }).catch((error) => { console.error(error) })
  // }, [gainersData])

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Top Gainers 🏆</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {gainersData.map((item, index) => (
          <TouchableOpacity
            style={styles.topGainerContainer}
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
              <Text style={styles.changeStyle}>{'+' + item.change}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default TopGainersComponent

const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginBottom: 25,
  },
  topGainerContainer: {
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
    color: '#3ED625',
  },
  rightContainer: {
    alignItems: 'center',
  },
})
