export type Movie = {
  id: number,
  genres: {
    id: number,
    name: string
  }[],
  original_title: string,
  release_date: string,
  vote_average: number,
  overview: string,
  poster_path: string,
  backdrop_path: string
  title: string
}