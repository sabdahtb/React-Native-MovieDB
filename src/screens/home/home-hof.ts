import { useEffect, useState } from 'react'
import { MOVIES_API, API_KEY } from '@env'
import { IRootStackParamList } from '../../constants'
import { useNavigation } from '@react-navigation/core'
import { NavigationProp } from '@react-navigation/native'

export const useHoks = () => {
  const [movieData, setMovieData] = useState<any>([])
  const [pageNumber, setPageNumber] = useState<number>(1)
  const navigation =
    useNavigation<NavigationProp<IRootStackParamList, 'Home'>>()

  useEffect(() => {
    fetch(
      `${MOVIES_API}/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNumber}`,
    )
      .then(response => response.json())
      .then(json => {
        setMovieData(json.results)
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
    navigation.navigate('MovieDetails', { idMovie: id })
  }

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
