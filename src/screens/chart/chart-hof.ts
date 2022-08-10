import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'

import {
  ILoveMovies,
  ICombineReducer,
  IRootStackParamList,
} from '../../constants'
import { LOVE_MOVE } from '../../stores/actions'
import { ToastAndroid } from 'react-native'

export const useHoks = () => {
  const navigation =
    useNavigation<NavigationProp<IRootStackParamList, 'Chart'>>()
  const dispatch = useDispatch()

  const { MyLoveReducer } = useSelector((state: ICombineReducer) => state)
  const [movieData, setMovieData] = useState<ILoveMovies[]>()

  const deleteFromLove = (idMovie: number) => {
    ToastAndroid.show('success remove from favorite', ToastAndroid.SHORT)
    dispatch(LOVE_MOVE.RemoveLoveMovies(idMovie))
  }

  const selectMovie = (id: number) => {
    navigation.navigate('MovieDetails', { idMovie: id })
  }

  useEffect(() => {
    setMovieData(MyLoveReducer.loves)
  }, [MyLoveReducer])

  return {
    datas: {
      movieData,
    },
    methods: {
      selectMovie,
      deleteFromLove,
    },
  }
}
