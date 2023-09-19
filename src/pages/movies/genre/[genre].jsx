// pages/movies/[category].js
import { fetchData } from "@/Utility/api"
import MovieList from "@/components/MovieList/movielist"
import Layout from "@/components/Layout/Layout"

export default function MovieGenre({ genre, movies }) {
  return (
    <Layout>
      <div>
        <div className="text-neutral-50 text-4xl font-semibold font-['Montserrat'] leading-loose pl-4">
          {genre} Movies
          <div className="w-64 h-px border-2 border-red-400"></div>
        </div>

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
  const fetchGenre = genres[genre]
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
