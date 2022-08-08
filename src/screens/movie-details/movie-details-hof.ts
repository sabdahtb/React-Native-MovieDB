import { Linking } from 'react-native'
import { MOVIES_API, API_KEY } from '@env'
import { useEffect, useState } from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
// import { StackNavigationProp } from '@react-navigation/stack'

import { IRootStackParamList } from '../../constants'

export const useHoks = () => {
  const [rating, setRating] = useState<number>(0)
  const [movieDetail, setMovieDetail] = useState<any>({})
  const [likeMovie, setLikeMovie] = useState<boolean>(false)

  // const navigation =
  //   useNavigation<StackNavigationProp<IRootStackParamList, 'MovieDetails'>>()
  const route = useRoute<RouteProp<IRootStackParamList, 'MovieDetails'>>()

  useEffect(() => {
    fetch(
      `${MOVIES_API}/movie/${route?.params?.idMovie}?api_key=${API_KEY}&language=en-US`,
    )
      .then(response => response.json())
      .then(json => {
        setMovieDetail(json)
        setRating(json.vote_average)
      })
      .catch(error => console.error(error))
  }, [route?.params?.idMovie])

  const handleLikes = () => {
    setLikeMovie(!likeMovie)
  }

  const goToHomepage = () => {
    Linking.openURL(movieDetail?.homepage)
  }

  return {
    datas: {
      rating,
      likeMovie,
      movieDetail,
    },
    methods: {
      handleLikes,
      goToHomepage,
    },
  }
}
