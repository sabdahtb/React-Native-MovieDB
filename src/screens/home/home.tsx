import React from 'react'
import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

import styles from './style'
import { useHoks } from './home-hof'
import { ActionButtons, Header } from './components'

const Home = () => {
  const {
    datas: { movieData, pageNumber },
    methods: { selectMovie, handlePageNumber, handlePrevPageNumber },
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
        <TouchableOpacity onPress={() => selectMovie(item.id)}>
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
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={StyleSheet.flatten([{ height: '80%', borderRadius: 5 }])}>
        <Text style={styles.movieHeader}>Popular Movies</Text>
        {movieData && (
          <FlatList
            data={movieData}
            renderItem={MovieCard}
            keyExtractor={item => item.original_title}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
      <ActionButtons
        pageNumber={pageNumber}
        handlePageNumber={handlePageNumber}
        handlePrevPageNumber={handlePrevPageNumber}
      />
    </View>
  )
}

export default Home
