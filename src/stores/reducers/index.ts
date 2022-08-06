import { combineReducers } from 'redux'
import DetailMovieReducer from './details'
import MyLoveReducer from './loves'

export default combineReducers({
  MyLoveReducer,
  DetailMovieReducer,
})
