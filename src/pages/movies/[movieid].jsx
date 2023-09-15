
import React from "react";

export default function MovieInfo({ title, language, production_companies, overview, imdb_id, popularity, poster_path, release_date, runtime }) {
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{overview}</p>
          <p>Language: {language}</p>
          {production_companies && production_companies.length > 0 && (
            <p>Production Companies: {production_companies.map(company => company.name).join(", ")}</p>
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
