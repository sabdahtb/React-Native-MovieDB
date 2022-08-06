import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from '../style'

const MovieCard = ({ item }: any) => {
  return (
    <TouchableOpacity>
      <View style={styles.cardStyle}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardTxtContainer}>
          <Text
            style={styles.cardTxt}
            children={
              item.title.length > 15
                ? item.title.substring(0, 15) + '...'
                : item.title
            }
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default MovieCard
