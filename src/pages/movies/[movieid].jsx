import React from "react";
import TrailerPlayer from "@/components/SingleMovieCard/TrailerPlayer";
import MovieInfo from "@/components/SingleMovieCard/MovieInfo";
import Navbar from "@/components/Navbar/Navbar";

export function MovieDetailInfo({
  title,
  original_language,
  production_companies,
  overview,
  imdb_id,
  popularity,
  poster_path,
  release_date,
  runtime,
}) {
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{overview}</p>
          <p>language: {original_language}</p>
          {production_companies && production_companies.length > 0 && (
            <p>Production Companies: {production_companies.map((company) => company.name).join(", ")}</p>
          )}
          <p>IMDB ID: {imdb_id}</p>
          <p>Popularity: {popularity}</p>
          <p>Release Date: {release_date}</p>
          <p>Runtime: {runtime} minutes</p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </>
  );
}

export function MovieDetailPage({ movieInfo, trailerData }) {
  return (
    <>
      <Navbar />
      <MovieDetailInfo {...movieInfo} />
      <TrailerPlayer youtubeVideoId={trailerData.key} />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const movieId = params.movieid;

  // Fetch movie details using your API
  const movieInfoUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  const movieInfoOptions = {
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDQ0MGFjM2E2NGQ3YTFjNzg2MGE4OWQ5OGU5YWIxMiIsInN1YiI6IjY1MDFkM2I0ZTBjYTdmMDBjYmViMTBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sdb2YMTp6rF92nHwh7zxf2PmeXtSR_R32x6z1SE1VWw",
    },
  };
  const movieInfoResponse = await fetch(movieInfoUrl, movieInfoOptions);
  const movieInfoData = await movieInfoResponse.json();

  // Fetch movie trailer data using your API
  const trailerUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
  const trailerOptions = {
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDQ0MGFjM2E2NGQ3YTFjNzg2MGE4OWD9OGU5YWIxMiIsInN1YiI6IjY1MDFkM2I0ZTBjYTdmMDBjYmViMTBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sdb2YMTp6rF92nHwh7zxf2PmeXtSR_R32x6z1SE1VWwY",
    },
  };
  const trailerResponse = await fetch(trailerUrl, trailerOptions);
  const trailerData = await trailerResponse.json();

  return {
    props: {
      movieInfo: movieInfoData,
      trailerData: trailerData.results.length > 0 ? trailerData.results[0] : null,
    },
  };
}
