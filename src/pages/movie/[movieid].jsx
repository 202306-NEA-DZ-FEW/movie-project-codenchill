import React from "react";
import TrailerPlayer from "@/components/SingleMovieCard/TrailerPlayer";
import Image from "next/image";
import { fetchData } from "@/Utility/api";
import Layout from "@/components/Layout/Layout";
import MovieList from "@/components/MovieList/movielist";
import ActorList from "@/components/actorlist/actorlist";

export function MovieDetailInfo({ movie, director }) {
  return (
    <div className="flex flex-wrap mx-auto max-w-7xl bg-gradient-to-r from-gray-800 to-red-500 p-4 rounded-lg shadow-lg text-white mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4">
      <div className="flex flex-wrap mx-auto max-w-5xl"> 
        <div className="w-full md:w-1/2 text-center">
          <h2 className="text-4xl font-bold">{movie.title}</h2>
          <div className="mt-2">
            <button className="bg-red-500 text-white  px-2 py-1 rounded-lg">
              {movie.release_date} 
            </button>
            <button className="bg-red-500 text-white ml-2 px-2 py-1 rounded-lg">
              {movie.runtime} minutes
            </button>
           
            <button className="bg-red-500 text-white ml-2 px-2 py-1 rounded-lg">
              {movie.spoken_languages[0] != undefined
                ? movie.spoken_languages[0].english_name
                : "unavailable"}
            </button>
          </div>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="Movie"
            width={300}
            height={450}
            className="mx-auto mt-4 rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-40 text-left pl-0">
          <div className="text-xl my-10">{movie.overview}</div>
          <p className="text-xl">Director: {director}</p>
          {movie.production_companies && movie.production_companies.length > 0 && (
            <div className="text-xl">
              <p>Production Companies:</p>
              <ul className="list-disc pl-6">
                {movie.production_companies.map((company) => (
                  <li key={company.id} className="flex items-center space-x-2">
                    <img
                      src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                      alt={company.name}
                      className="w-8 h-8"
                    />
                    <span>{company.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="Movie"
          width={300}
          height={450}
          className="mx-auto mt-4 rounded-lg"
        />
      </div>

    </div>
  );

}


export default function MovieDetailPage({
  movieInfo,
  trailerData,
  movies,
  actors,
  director,
}) {
  return (
    <Layout>
      <div className="bg-gradient-to-r bg-base-content p-4 ">
        <MovieDetailInfo movie={movieInfo} director={director} />
        <br />
        <div className=" mx-auto max-w-screen-md">
        <TrailerPlayer
          youtubeVideoId={
            trailerData != "unavailable" ? (
              trailerData.key
            ) : (
              <p className="text-white">Unable to find a trailer</p>
            )
          }
        />
        </div>
        <div className="text-center mt-8">
          <h2 className="text-2xl font-semibold text-white">Related Movies</h2>
          
          <div className="mx-auto w-full max-w-screen-lg">
            <MovieList movies={movies} />
          </div>
          <h2 className="text-2xl font-semibold text-white ">Featured Actors</h2>
          <div className="mx-auto w-full max-w-screen-lg">
            <ActorList actors={actors} />
          </div>
        </div>
      </div>
    </Layout>
  );

}

export async function getServerSideProps({ params }) {
  const movieId = params.movieid;
  // Fetch movie details using your API
  const movieInfoData = await fetchData(`movie/${movieId}?language=en-US`);
  // Fetch movie trailer data using your API
  const trailerData = await fetchData(`movie/${movieId}/videos?language=en-US`);
  const similarMovies = await fetchData(`movie/${movieId}/similar`);
  const movieIds = similarMovies.results.map((movie) => movie.id);
  const movies = await Promise.all(
    movieIds.map((id) => fetchData(`movie/${id}`))
  );
  const actors = await fetchData(`movie/${movieId}/credits`);
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
  };
}

