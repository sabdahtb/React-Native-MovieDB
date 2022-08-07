import React from 'react'
import { View, Image } from 'react-native'

import styles from './style'
import { useHoks } from './movie-details-hof'
import BottomContent from './components/bottom-content'

const MovieDetails = () => {
  const {
    datas: { rating, likeMovie, movieDetail },
    methods: { handleLikes, goToHomepage },
  } = useHoks()
  return (
    <View style={styles.container}>
      {movieDetail && (
        <>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`,
            }}
            style={styles.moviePhotos}
          />
          <BottomContent
            rating={rating}
            likeMovie={likeMovie}
            movieDetail={movieDetail}
            handleLikes={handleLikes}
            goToHomepage={goToHomepage}
          />
        </>
      )}
    </View>
  )
}

export default MovieDetails
