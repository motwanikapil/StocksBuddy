import React from 'react'
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { NEWS_DATA } from '../../Data/newsData'

const TopStockNewsComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Top News Articles 🤔</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {NEWS_DATA.map((news, index) => (
          <TouchableOpacity
            style={styles.topNewsContainer}
            key={index}
            activeOpacity={0.5}
          >
            <View style={styles.newsContainer}>
              <View>
                <Image
                  source={{ uri: news.urlToImage }}
                  style={styles.newsImageStyle}
                />
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.newsTitleStyle}>{news.title}</Text>
                <Text style={{ color: '#FAFCFF', marginTop: 15 }}>
                  {news.author && (
                    <Text style={styles.newsAuthorStyle}>
                      {'Source : ' + news.author}
                    </Text>
                  )}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default TopStockNewsComponent

const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginBottom: 30,
    height: 300,
  },
  topNewsContainer: {
    backgroundColor: '#033141',
    marginRight: 25,
    width: 390,
    height: 150,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 25,
  },
  newsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  newsImageStyle: {
    height: 80,
    width: 80,
    marginLeft: 10,
    borderRadius: 10,
  },
  newsTitleStyle: {
    color: '#FAFCFF',
    width: 280,
  },
  newsAuthorStyle: {
    color: '#FAFCFF',
    fontWeight: '700',
    marginTop: 20,
    marginLeft: 30,
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: '700',
    color: '#033141',
    marginBottom: 20,
  },
  descriptionContainer: {
    marginLeft: 10,
  },
})
