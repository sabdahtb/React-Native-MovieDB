/* eslint-disable @typescript-eslint/no-unused-vars */
import { ISelectMovie } from '../../../constants'
import { SELECT_MOVIE } from './actions'

const Selectmovies = (selectedMovies: ISelectMovie) => {
  return {
    type: SELECT_MOVIE,
    payload: selectedMovies,
  }
}

export { Selectmovies }
