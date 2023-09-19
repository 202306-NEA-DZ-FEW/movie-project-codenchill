import { useState } from "react"
import { fetchData } from "@/Utility/api"
import Layout from "@/components/Layout/Layout"

import MovieList from "@/components/MovieList/movielist"

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
      <div className="bg-gradient-to-r bg-base-content p-4 ">
        <div className="text-neutral-50 text-4xl font-semibold font-['Montserrat'] leading-loose">
          {category.replace(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\\/-]/g, " ")} Movies
        </div>
        <div className="w-64 h-px border-4 border-red-400"></div>
        <MovieList movies={movies} />
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mx-auto mt-4 block"
          onClick={fetchNextPage}
        >
          Load More
        </button>
      </div>
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
