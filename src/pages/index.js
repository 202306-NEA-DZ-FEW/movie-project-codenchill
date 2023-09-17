import { fetchData } from "@/Utility/api"
import Layout from "@/components/Layout/Layout"
import MovieList from "@/components/movielist/movielist"

export default function Home(movies) {
  return (
    <Layout>
      <MovieList {...movies} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const moviesList = await fetchData("trending/movie/day?language=en-US")
  const genresList = await fetchData("genre/movie/list?language=en")

  const genres = genresList.genres.reduce((acc, genre) => {
    acc[genre.id] = genre.name
    return acc
  }, {})

  const movies = moviesList.results.map((movie) => {
    const genreNames = movie.genre_ids.map((genreId) => genres[genreId])
    return { ...movie, genre_ids: genreNames }
  })
  return {
    props: {
      movies: movies.slice(0, 20),
    },
  }
}

