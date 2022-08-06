// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ILoveMoviesReducer } from '../../../constants'
import { ADD_NEW_LOVES, CLEAR_LOVES } from '../../actions/loves/actions'

const initialState: ILoveMoviesReducer = {
  loves: null,
}

export default (state: ILoveMoviesReducer = initialState, action: any) => {
  switch (action.type) {
    case ADD_NEW_LOVES: {
      return {
        ...state,
        loves: action.payload,
      }
    }
    case CLEAR_LOVES: {
      return initialState
    }
    default: {
      return state
    }
  }
}
