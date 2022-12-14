import { useDispatch, useSelector } from 'react-redux'
import { MOVIES_API, API_KEY } from '@env'
import { useEffect, useState } from 'react'
import { Linking, ToastAndroid } from 'react-native'
import analytics from '@react-native-firebase/analytics'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
// import { StackNavigationProp } from '@react-navigation/stack'

import { LOVE_MOVE } from '../../stores/actions'
import {
  ICombineReducer,
  ILoveMovies,
  IRootStackParamList,
} from '../../constants'
import { StackNavigationProp } from '@react-navigation/stack'

export const useHoks = () => {
  const dispatch = useDispatch()
  const { MyLoveReducer } = useSelector((state: ICombineReducer) => state)

  const [rating, setRating] = useState<number>(0)
  const [movieDetail, setMovieDetail] = useState<any>({})
  const [likeMovie, setLikeMovie] = useState<boolean>(false)

  const navigation =
    useNavigation<StackNavigationProp<IRootStackParamList, 'MovieDetails'>>()
  const route = useRoute<RouteProp<IRootStackParamList, 'MovieDetails'>>()

  const saveNewLovesMovie = (newMovie: ILoveMovies) => {
    dispatch(LOVE_MOVE.AddNewLoveMovies(newMovie))
  }

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

  const handleLikes = (movies: any) => {
    ToastAndroid.show('success add to favorite', ToastAndroid.SHORT)
    let newMovie: ILoveMovies = {
      id: movies.id,
      title: movies.title,
      overview: movies.overview,
      poster_path: movies.poster_path,
    }
    setLikeMovie(!likeMovie)
    saveNewLovesMovie(newMovie)
  }

  const backToHome = () => {
    navigation.goBack()
  }

  const openHalaman = async () => {
    await analytics()
      .logEvent('movies')
      .then(() => {
        console.log('soccess logEvent')
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    openHalaman()
    console.log('reduxxx', JSON.stringify(MyLoveReducer))
    MyLoveReducer.loves.map(movie => {
      if (route?.params?.idMovie === movie.id) {
        setLikeMovie(true)
      }
    })
  }, [MyLoveReducer, route?.params?.idMovie])

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
      backToHome,
      handleLikes,
      goToHomepage,
    },
  }
}
