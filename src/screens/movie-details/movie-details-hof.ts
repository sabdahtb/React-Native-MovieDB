import { useEffect, useState } from 'react'
import { MOVIES_API, API_KEY } from '@env'
import { useSelector } from 'react-redux'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ICombineReducer } from '../../constants'
import { Linking } from 'react-native'

export const useHoks = () => {
  const [rating, setRating] = useState<number>(0)
  const [movieDetail, setMovieDetail] = useState<any>({})
  const [likeMovie, setLikeMovie] = useState<boolean>(false)

  const { DetailMovieReducer } = useSelector((state: ICombineReducer) => state)

  useEffect(() => {
    fetch(
      `${MOVIES_API}/movie/${DetailMovieReducer?.id}?api_key=${API_KEY}&language=en-US`,
    )
      .then(response => response.json())
      .then(json => {
        setMovieDetail(json)
        setRating(json.vote_average)
        console.log(JSON.stringify(json))
      })
      .catch(error => console.error(error))
  }, [DetailMovieReducer?.id])

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
