// pages/movies/[category].js
import { fetchData } from "@/Utility/api"
import MovieList from "/src/components/movielist/movielist" // Create a MovieList component for displaying the list of movies
import Layout from "@/components/Layout/Layout"

export default function MovieGenre({ genre, movies }) {
  return (
    <Layout>
      <div>
        <h1>{genre} Movies</h1>
        <MovieList movies={movies} />
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { genre } = context.params
  const genresList = await fetchData("genre/movie/list?language=en")
  const genres = genresList.genres.reduce((acc, genre) => {
    acc[genre.name] = genre.id
    return acc
  }, {})
  const fetchGenre = genres[`${genre}`]
  const moviesList = await fetchData(`discover/movie?with_genres=${fetchGenre}`)
  const movieIds = moviesList.results.map((movie) => movie.id)
  const movies = await Promise.all(
    movieIds.map((id) => fetchData(`movie/${id}`)),
  )
  return {
    props: {
      genre,
      movies: movies,
    },
  }
}
