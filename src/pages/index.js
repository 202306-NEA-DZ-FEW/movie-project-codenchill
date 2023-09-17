import { fetchData } from "@/Utility/api"
import Layout from "@/components/Layout/Layout"
import MovieCard from "@/components/moviecard/movie-card"
import Image from "next/image"
import Link from "next/link"

export default function Home({ movies, genres }) {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4 justify-center items-center">
        {movies.map((movie, index) => (
          <Link key={movie.id} href={`/movies/${movie.id}`}>
            <MovieCard id={index} key={movie.id} {...movie} />
          </Link>
        ))}
      </div>
    </Layout>
  )
}
/*
        // <Image
        //    // Remember to add a unique key when mapping
        //   src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        //   className="carousel-item"
        //   alt="Movie backdrop"
        //   width={500} // These values are set to 0, which means the browser will determine the size based on the aspect ratio.
        //   height={500}
        //   quality={100}
        // />
      ))}*/

export async function getServerSideProps() {
  const moviesList = await fetchData("trending/movie/day?language=en-US")
  const genresList = await fetchData("genre/movie/list?language=en")

  const genres = genresList.genres.reduce((acc, genre) => {
    acc[genre.id] = genre.name
    return acc
  }, {})

  const movies = moviesList.results.map((movie) => {
    const genreNames = movie.genre_ids.map((genreId) => genres[genreId])
    return { ...movie, genre_ids: genreNames }
  })
  return {
    props: {
      movies: movies.slice(0, 20),
      genres: genres,
    },
  }
}