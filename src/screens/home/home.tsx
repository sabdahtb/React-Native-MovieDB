import React from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native'
import { useHoks } from './home-hof'

import styles from './style'

const Home = () => {
  const {
    datas: { dummyData },
    methods: { handlePageNumber, handlePrevPageNumber },
  } = useHoks()
  return (
    <View style={styles.container}>
      <Text
        style={StyleSheet.flatten([
          {
            fontSize: 32,
            textAlign: 'center',
            marginVertical: 10,
            fontWeight: 'bold',
          },
        ])}>
        MOVIE DB
      </Text>
      <View>
        {dummyData && (
          <FlatList
            data={dummyData}
            renderItem={MovieCard}
            keyExtractor={item => item.original_title}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          />
        )}
      </View>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: '100%',
          paddingHorizontal: '5%',
          height: 100,
          marginTop: 100,
        }}>
        <TouchableOpacity // eslint-disable-next-line react-native/no-inline-styles
          style={{
            height: 60,
            padding: 5,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1B2430',
          }}
          onPress={handlePageNumber}>
          <Text>NEXT PAGE</Text>
        </TouchableOpacity>
      </View>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: '100%',
          paddingHorizontal: '5%',
          height: 100,
        }}>
        <TouchableOpacity // eslint-disable-next-line react-native/no-inline-styles
          style={{
            height: 60,
            padding: 5,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1B2430',
          }}
          onPress={handlePrevPageNumber}>
          <Text>PREV PAGE</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home

const MovieCard = ({ item }: any) => {
  return (
    <TouchableOpacity>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: 300,
          width: 150,
          borderRadius: 10,
          margin: 10,
        }}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            resizeMode: 'cover',
            height: '75%',
            width: '100%',
            borderTopLeftRadius: 10,
            borderRadius: 5,
            marginBottom: 5,
          }}
        />
        <View // eslint-disable-next-line react-native/no-inline-styles
          style={{
            height: 60,
            padding: 5,
            width: '100%',
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1B2430',
          }}>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              fontSize: 14,
              textAlign: 'center',
              textTransform: 'uppercase',
              color: '#34B3F1',
            }}
            children={item.title}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}
