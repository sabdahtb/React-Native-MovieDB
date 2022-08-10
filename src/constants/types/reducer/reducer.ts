import { ISelectMovie, ILoveMoviesReducer } from '../'

export type ICombineReducer = {
  DetailMovieReducer: ISelectMovie
  MyLoveReducer: ILoveMoviesReducer
}
