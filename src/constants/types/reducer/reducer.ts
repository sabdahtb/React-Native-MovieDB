import { ISelectMovie, ILoveMovies } from '../'

export type ICombineReducer = {
  DetailMovieReducer: ISelectMovie
  MyLoveReducer: ILoveMovies
}
