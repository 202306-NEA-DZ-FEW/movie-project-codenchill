import React from "react"
import TrailerPlayer from "@/components/SingleMovieCard/TrailerPlayer"
import Image from "next/image"
import { fetchData } from "@/Utility/api"
import Layout from "@/components/Layout/Layout"
import MovieList from "@/components/movielist/movielist"
import ActorList from "@/components/actorlist/actorlist"

export function MovieDetailInfo({ movie, director }) {
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="Movie"
            width={200}
            height={200}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>
            language:{" "}
            {movie.spoken_languages[0] != undefined
              ? movie.spoken_languages[0].english_name
              : "unavailable"}
          </p>
          {movie.production_companies &&
            movie.production_companies.length > 0 && (
              <p>
                Production Companies:{" "}
                {movie.production_companies
                  .map((company) => company.name)
                  .join(", ")}
              </p>
            )}
          <p>Popularity: {movie.popularity}</p>
          <p>Director: {director}</p>

          <p>Total Votes: {movie.vote_count}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Runtime: {movie.runtime} minutes</p>

          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </>
  )
}

export default function MovieDetailPage({
  movieInfo,
  trailerData,
  movies,
  actors,
  director,
}) {
  return (
    <>
      <Layout>
        <MovieDetailInfo movie={movieInfo} director={director} />
        <TrailerPlayer
          youtubeVideoId={
            trailerData != "unavailable" ? (
              trailerData.key
            ) : (
              <p>Unable to find a trailer</p>
            )
          }
        />
        <ActorList actors={actors} />
        <MovieList movies={movies} />
      </Layout>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const movieId = params.movieid
  // Fetch movie details using your API
  const movieInfoData = await fetchData(`movie/${movieId}?language=en-US`)
  // Fetch movie trailer data using your API
  const trailerData = await fetchData(`movie/${movieId}/videos?language=en-US`)
  const similarMovies = await fetchData(`movie/${movieId}/similar`)
  const movieIds = similarMovies.results.map((movie) => movie.id)
  const movies = await Promise.all(
    movieIds.map((id) => fetchData(`movie/${id}`)),
  )
  const actors = await fetchData(`movie/${movieId}/credits`)
  return {
    props: {
      movieInfo: movieInfoData,
      trailerData:
        trailerData.results[0] === undefined
          ? "unavailable"
          : trailerData.results[0],
      movies: movies.slice(0, 5),
      actors: actors.cast.slice(0, 5),
      director: actors.crew[0].name,
    },
  }
}
