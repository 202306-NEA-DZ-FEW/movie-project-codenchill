// pages/movies/[category].js
import { fetchData } from "@/Utility/api"
import MovieList from "@/components/MovieList/movielist"
import Layout from "@/components/Layout/Layout"

export default function MovieCategory({ category, movies }) {
  return (
    <Layout>
      <div className="text-neutral-50 text-4xl font-semibold font-['Montserrat'] leading-loose">
        {category.replace(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\\/-]/g, " ")} Movies
      </div>
      <div className="w-64 h-px border-4 border-red-400"></div>
      <MovieList movies={movies} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { category } = context.params
  let moviesList
  if (category != "latest") {
    moviesList = await fetchData(`movie/${category}`)
  } else {
    moviesList = await fetchData(`/trending/movie/day?language=en-US`)
  }
  const movieIds = moviesList.results.map((movie) => movie.id)
  const movies = await Promise.all(
    movieIds.map((id) => fetchData(`movie/${id}`)),
  )
  return {
    props: {
      category,
      movies: movies,
    },
  }
}
