import { useState } from "react"
import { fetchData } from "@/Utility/api"
import Layout from "@/components/Layout/Layout"

import MovieList from "@/components/movielist/movielist"

export default function Home({ category, initialMovies }) {
  const [movies, setMovies] = useState(initialMovies)
  const [page, setPage] = useState(1)

  const fetchNextPage = async () => {
    const nextPage = page + 1
    const moviesList = await fetchData(
      `trending/movie/day?language=en-US&page=${nextPage}`,
    )
    const movieIds = moviesList.results.map((movie) => movie.id)
    const nextMovies = await Promise.all(
      movieIds.map((id) => fetchData(`movie/${id}`)),
    )

    setMovies((prevMovies) => [...prevMovies, ...nextMovies])
    setPage(nextPage)
  }

  return (
    <Layout>
      <h1>{category} Movies</h1>
      <MovieList movies={movies} />
      <button
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mx-auto mt-4 block"
        onClick={fetchNextPage}
      >
        Load More
      </button>
    </Layout>
  )
}

export async function getServerSideProps() {
  const moviesList = await fetchData("trending/movie/day?language=en-US")
  const movieIds = moviesList.results.map((movie) => movie.id)
  const initialMovies = await Promise.all(
    movieIds.slice(0, 20).map((id) => fetchData(`movie/${id}`)),
  )
  return {
    props: {
      category: "Latest",
      initialMovies,
    },
  }
}
