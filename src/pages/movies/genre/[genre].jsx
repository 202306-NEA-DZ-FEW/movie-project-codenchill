// pages/movies/[category].js
import { fetchData } from "@/Utility/api"
import MovieList from "/src/components/movielist/movielist" // Create a MovieList component for displaying the list of movies

export default function MovieGenre({ genre, movies }) {
  return (
    <div>
      <h1>{genre} Movies</h1>
      <MovieList movies={movies} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const { genre } = context.params
  const genresList = await fetchData("genre/movie/list?language=en")
  const genres = genresList.genres.reduce((acc, genre) => {
    acc[genre.name] = genre.id
    return acc
  }, {})
  const moviesList = await fetchData(
    `discover/movie?with_genres=${genres["Comedy"]}`,
  )

  return {
    props: {
      genre,
      movies: moviesList.results,
    },
  }
}
