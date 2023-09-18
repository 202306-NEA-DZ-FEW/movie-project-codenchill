import { fetchData } from "@/Utility/api"
import Layout from "@/components/Layout/Layout"

import MovieList from "@/components/MovieList/movielist"

export default function Home({ category, movies }) {
  return (
    <Layout>
      <h1>{category} Movies</h1>
      <MovieList movies={movies} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const moviesList = await fetchData("trending/movie/day?language=en-US")
  const movieIds = moviesList.results.map((movie) => movie.id)
  const movies = await Promise.all(
    movieIds.map((id) => fetchData(`movie/${id}`)),
  )
  return {
    props: {
      category: "Latest",
      movies: movies.slice(0, 20),
    },
  }
}
