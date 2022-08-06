import { useEffect, useState } from 'react'
import { API_KEY } from '@env'
import { useDispatch, useSelector } from 'react-redux'
import { DETAIL_MOVIE } from '../../stores/actions'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ICombineReducer } from '../../constants'

export const useHoks = () => {
  const [movieData, setMovieData] = useState<any>([])
  const [pageNumber, setPageNumber] = useState<number>(1)
  const dispatch = useDispatch()

  const { DetailMovieReducer } = useSelector((state: ICombineReducer) => state)

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNumber}`,
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
    selectMovie()
  }

  const selectMovie = () => {
    dispatch(DETAIL_MOVIE.Selectmovies({ id: 12345 }))
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
      handlePageNumber,
      handlePrevPageNumber,
      selectMovie,
    },
  }
}
