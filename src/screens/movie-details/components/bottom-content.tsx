import React from 'react'
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import styles from '../style'
import { Icons } from '../../../assets'

type IBottomContent = {
  rating: number
  movieDetail: any
  likeMovie: boolean
  handleLikes: (movies: any) => void
  goToHomepage: () => void
}

const BottomContent = ({
  rating,
  likeMovie,
  movieDetail,
  handleLikes,
  goToHomepage,
}: IBottomContent) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={StyleSheet.flatten([{ marginTop: 5, paddingHorizontal: 20 }])}>
      <View style={styles.movieTitle}>
        <Text style={styles.movieTitleText} children={movieDetail.title} />
        <TouchableOpacity
          disabled={likeMovie}
          onPress={() => handleLikes(movieDetail)}>
          <Image
            source={Icons.chart_icon}
            style={StyleSheet.flatten([
              { width: 30, height: 30, marginHorizontal: 20 },
              { tintColor: likeMovie ? '#F10086' : 'white' },
            ])}
          />
        </TouchableOpacity>
      </View>
      <Text>
        {movieDetail.overview ? movieDetail.overview : 'No Overview yet :( '}
      </Text>
      <View style={styles.ratingContainer}>
        <View>
          <Text>Rating</Text>
          <Text>{rating.toFixed(1)}</Text>
        </View>
        <View>
          <Text>Homepage</Text>
          <TouchableOpacity onPress={goToHomepage}>
            <Text
              style={StyleSheet.flatten([
                {
                  color: '#34B3F1',
                  marginRight: movieDetail.homepage ? 0 : '60%',
                },
              ])}>
              {movieDetail.homepage ? movieDetail.homepage : '-'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default BottomContent
