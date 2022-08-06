export type ILoveMovies = {
  title: string
  poster_path: string
  id: number
  release_date: string
  overview: string
}

export type ILoveMoviesReducer = {
  loves: ILoveMovies | null
}
