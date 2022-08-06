import React from 'react'
import { View, FlatList, Text } from 'react-native'

import styles from './style'
import { useHoks } from './home-hof'
import { ActionButtons, Header, MovieCard } from './components'

const Home = () => {
  const {
    datas: { movieData, pageNumber },
    methods: { handlePageNumber, handlePrevPageNumber },
  } = useHoks()
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <Text style={styles.movieHeader}>Popular Movies</Text>
        {movieData && (
          <FlatList
            data={movieData}
            horizontal={true}
            renderItem={MovieCard}
            keyExtractor={item => item.original_title}
            showsHorizontalScrollIndicator={false}
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
