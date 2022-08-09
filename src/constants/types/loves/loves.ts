export type ILoveMovies = {
  title?: string
  poster_path?: string
  id?: number
  overview?: string
}

export type ILoveMoviesReducer = {
  loves: ILoveMovies[]
}
