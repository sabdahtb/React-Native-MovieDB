// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ISelectMovie } from '../../../constants'
import { CLEAR_SELECT_MOVIE, SELECT_MOVIE } from '../../actions/details/actions'

const initialState: ISelectMovie = {
  id: null,
}

export default (state: ISelectMovie = initialState, action: any) => {
  switch (action.type) {
    case SELECT_MOVIE: {
      return {
        ...state,
        id: action.payload,
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
