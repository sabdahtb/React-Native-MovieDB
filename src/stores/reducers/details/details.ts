import { ISelectMovie } from '../../../constants'
import { CLEAR_SELECT_MOVIE, SELECT_MOVIE } from '../../actions/details/actions'

const initialState: ISelectMovie = {
  id: null,
}

export default (state: ISelectMovie = initialState, action: any) => {
  switch (action.type) {
    case SELECT_MOVIE: {
      return {
        id: action.payload.id,
      }
    }
    case CLEAR_SELECT_MOVIE: {
      return initialState
    }
    default: {
      return state
    }
  }
}
