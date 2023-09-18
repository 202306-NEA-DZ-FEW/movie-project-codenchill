// pages/movies/[category].js
import { fetchData } from "@/Utility/api"
import ActorCard from "@/components/Actorcard/ActorCard"
import MovieList from "@/components/movielist/movielist"
import Layout from "@/components/Layout/Layout"

export default function Actor({ actor, movies }) {
  return (
    <Layout>
      <ActorCard {...actor} />
      <p>Movie Credits</p>
      <MovieList movies={movies} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params
  const actor = await fetchData(`person/${id}`)
  const moviesList = await fetchData(`person/${id}/movie_credits`)
  const movieIds = moviesList.cast.map((movie) => movie.id)

  const movies = await Promise.all(
    movieIds.map((id) => fetchData(`movie/${id}`)),
  )

  return {
    props: {
      actor: actor,
      movies: movies.slice(0, 5),
    },
  }
}
