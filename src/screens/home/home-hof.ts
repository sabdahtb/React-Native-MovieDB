import { useEffect, useState } from 'react'
import { API_KEY } from '@env'

export const useHoks = () => {
  const [movieData, setMovieData] = useState<any>([])
  const [pageNumber, setPageNumber] = useState<number>(1)

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
  }

  return {
    datas: {
      movieData,
      pageNumber,
    },
    methods: {
      handlePageNumber,
      handlePrevPageNumber,
    },
  }
}
