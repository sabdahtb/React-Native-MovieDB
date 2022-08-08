import { ILoveMoviesReducer } from '../../../constants'
import { ADD_NEW_LOVES } from './actions'

const AddNewLoveMovies = (newMovies: ILoveMoviesReducer) => {
  return {
    type: ADD_NEW_LOVES,
    payload: newMovies,
  }
}

export { AddNewLoveMovies }
