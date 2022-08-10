import { ILoveMovies } from '../../../constants'
import { ADD_NEW_LOVES, CLEAR_LOVES } from './actions'

const AddNewLoveMovies = (newMovies: ILoveMovies) => {
  return {
    type: ADD_NEW_LOVES,
    payload: newMovies,
  }
}

const RemoveLoveMovies = (idMovie: number) => {
  return {
    type: CLEAR_LOVES,
    payload: idMovie,
  }
}

export { AddNewLoveMovies, RemoveLoveMovies }
