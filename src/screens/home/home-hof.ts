import { useEffect, useState } from 'react'
import { MOVIES_API, API_KEY } from '@env'
import { useDispatch, useSelector } from 'react-redux'
import { DETAIL_MOVIE } from '../../stores/actions'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ICombineReducer, IRootStackParamList } from '../../constants'
import { useNavigation } from '@react-navigation/core'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NavigationProp } from '@react-navigation/native'

export const useHoks = () => {
  const [movieData, setMovieData] = useState<any>([])
  const [pageNumber, setPageNumber] = useState<number>(1)
  const dispatch = useDispatch()
  const navigation =
    useNavigation<NavigationProp<IRootStackParamList, 'Home'>>()

  const { DetailMovieReducer } = useSelector((state: ICombineReducer) => state)

  useEffect(() => {
    fetch(
      `${MOVIES_API}/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNumber}`,
    )
      .then(response => response.json())
      .then(json => {
        setMovieData(json.results)
        console.log(JSON.stringify(json))
      })
      .catch(error => console.error(error))
  }, [pageNumber])

  const handlePageNumber = () => {
    setPageNumber(prev => prev + 1)
  }

  const handlePrevPageNumber = () => {
    setPageNumber(prev => prev - 1)
  }

  const selectMovie = (id: number) => {
    dispatch(DETAIL_MOVIE.Selectmovies({ id: id }))
    navigation.navigate('MovieDetails', { idMovie: id })
  }

  useEffect(() => {
    console.log(DetailMovieReducer.id)
  }, [DetailMovieReducer.id])

  return {
    datas: {
      movieData,
      pageNumber,
    },
    methods: {
      selectMovie,
      handlePageNumber,
      handlePrevPageNumber,
    },
  }
}
