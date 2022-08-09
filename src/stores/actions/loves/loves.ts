import { ILoveMovies } from '../../../constants'
import { ADD_NEW_LOVES } from './actions'

const AddNewLoveMovies = (newMovies: ILoveMovies) => {
  return {
    type: ADD_NEW_LOVES,
    payload: newMovies,
  }
}

export { AddNewLoveMovies }
