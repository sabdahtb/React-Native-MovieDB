import React from 'react'
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import styles from './style'
import { useHoks } from './chart-hof'
import { Icons } from '../../assets'

const Chart = () => {
  const {
    datas: { movieData },
    methods: { selectMovie, deleteFromLove },
  } = useHoks()

  const MovieCard = ({ item }: any) => {
    return (
      <View style={styles.cardStyle}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          }}
          style={styles.cardImage}
        />
        <View style={StyleSheet.flatten([{ width: '60%' }])}>
          <Text
            style={styles.cardTxt}
            children={
              item.title.length > 22
                ? item.title.substring(0, 22) + '...'
                : item.title
            }
          />
          <Text
            style={styles.detailTxt}
            children={
              item.overview.length > 250
                ? item.overview.substring(0, 250) + '...'
                : item.overview
            }
          />
        </View>
        <View style={styles.actionsButton}>
          <TouchableOpacity
            style={styles.cardButton}
            onPress={() => selectMovie(item.id)}>
            <Text style={styles.cardButtonTxt} children={'View Details'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteFromLove(item.id)}>
            <Image source={Icons.chart_icon} style={styles.loveButton} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={StyleSheet.flatten([{ height: '100%', borderRadius: 5 }])}>
        <Text style={styles.movieHeader}>Loves Movies</Text>
        {movieData && (
          <FlatList
            data={movieData}
            renderItem={MovieCard}
            keyExtractor={item => item?.title}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  )
}

export default Chart
