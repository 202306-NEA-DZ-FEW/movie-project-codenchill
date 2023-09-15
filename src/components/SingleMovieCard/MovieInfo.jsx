
import React from "react";

export default function MovieInfo({title, language, production_companies,overview, imdb_id, popularity, poster_path, release_date, runtime }) {
    return (
        <>
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><image src={poster_path} alt={title} /></figure>
            <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                    <p>{overview}</p>
                    <p>Language: {language}</p>
                    <p>Production Companies: {production_companies}</p>
                    <p>IMDB Rating: {imdb_id}</p>
                    <p>Popularity: {popularity}</p>
                    <p>Release Date: {release_date}</p>
                    <p>Runtime: {runtime} minutes</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>


</>
    )
}
 






