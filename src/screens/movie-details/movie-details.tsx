import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'

import styles from './style'
import { Icons } from '../../assets'
import { useHoks } from './movie-details-hof'
import BottomContent from './components/bottom-content'

const MovieDetails = () => {
  const {
    datas: { rating, likeMovie, movieDetail },
    methods: { handleLikes, goToHomepage, backToHome },
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
          <TouchableOpacity style={styles.backButton} onPress={backToHome}>
            <Image source={Icons.back_icon} style={styles.backIcon} />
          </TouchableOpacity>
        </>
      )}
    </View>
  )
}

export default MovieDetails
