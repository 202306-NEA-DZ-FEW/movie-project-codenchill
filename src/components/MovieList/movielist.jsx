import React from "react"
import Link from "next/link"
import MovieCard from "../moviecard/movie-card"

export default function MovieList({ movies }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4 justify-center items-center">
      {movies.map((movie, index) => (
        <Link key={movie.id} href={`/movie/${movie.id}`}>
          <MovieCard id={index} key={movie.id} {...movie} />
        </Link>
      ))}
    </div>
  )
}
