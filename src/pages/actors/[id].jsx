// pages/movies/[category].js
import { fetchData } from "@/Utility/api"
import MovieList from "@/components/MovieList/movielist"
import Layout from "@/components/Layout/Layout"
import Image from "next/image"

export function ActorDetailInfo(actor) {
  return (
    <div className="bg-gradient-to-r bg-base-content p-4 ">
      <div className=" mx-auto max-w-7xl bg-gradient-to-r from-gray-800 to-red-500 p-4 rounded-lg shadow-lg text-white mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4">
        <div className="flex flex-wrap mx-auto max-w-5xl">
          <div className="w-full md:w-1/2 text-center">
            <h2 className="text-4xl font-bold">{actor.name}</h2>
            <Image
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt="Movie"
              width={300}
              height={450}
              className="mx-auto mt-4 rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-40 text-left pl-0">
            <div className="text-xl pt-4 ">
              Gender: {actor.gender === 2 ? "Male" : "Female"}
            </div>
            <div className="text-xl pt-4">Birthday: {actor.birthday}</div>
            <div className="text-xl pt-4">Popularity: {actor.popularity}</div>
            <div className="text-xl my-10 ">Biography:</div>
            <p className="text-xl">{actor.biography}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Actor({ actor, movies }) {
  return (
    <Layout>
      <div className="bg-gradient-to-r bg-base-content p-4 ">
        <ActorDetailInfo {...actor} />

        <div className="text-center mt-8">
          <h2 className="text-2xl font-semibold text-white">Movie Credits</h2>

          <div className="mx-auto w-full max-w-screen-lg">
            <MovieList movies={movies} />
          </div>
        </div>
      </div>
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
