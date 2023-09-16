import { fetchData } from "@/Utility/api"
import MovieCard from "@/components/moviecard/movie-card"
import Image from "next/image"

export default function Home({ data }) {
  console.log(data[0])
  return (
    <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
      {data.map((movie, index) => (
        <MovieCard
          id={index}
          key={movie.id}
          title={movie.title}
          releaseData={movie.release_date}
          imageUrl={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        />
      ))}
      {/*
        // <Image
        //    // Remember to add a unique key when mapping
        //   src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        //   className="carousel-item"
        //   alt="Movie backdrop"
        //   width={500} // These values are set to 0, which means the browser will determine the size based on the aspect ratio.
        //   height={500}
        //   quality={100}
        // />
      ))}*/}
    </ul>
  )
}
export async function getServerSideProps() {
  const data = await fetchData("trending/movie/day?language=en-US")
  return {
    props: {
      data: data.results.slice(0, 5),
    },
  }
}
