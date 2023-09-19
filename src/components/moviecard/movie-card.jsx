import Image from "next/image"
import { StarIcon } from "@heroicons/react/solid"
const MovieCard = (movie) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`
  const title = movie.title
  const genres = movie.genres
  const releaseDate = movie.release_date
  const runtime=movie.runtime
  const rating=movie.vote_average.toFixed(1)

  
  //const releaseDate = movie.release_date.substring(0, 4)
  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    
    return  `${hours}h ${mins}m`;
  }



  const renderGenres = () => {
    return genres.map((genre, index) => (
      <span
        key={index}
        className="badge  badge-md bg-custom-color font-montserrat text-white"
      >
        {genre.name}
      </span>
    ))
  }
  return (
    <div >
      <div className="relative inline-block ">
        <div className=" absolute space-x-1 inset-0 bg-gradient-to-t from-red-500 via-transparent to-transparent opacity-0 transition rounded-lg duration-300 ease-in-out hover:opacity-70">
        
               {renderGenres()}
              
          
          
      
        </div>
       
        <Image
          className="rounded-lg"
          src={imageUrl}
          alt={title}
          width={200}
          height={200}
          quality={100}
        />
      </div>
      <div className="items-center w-200 h-200">
        <p className="font-montserrat uppercase font-bold text-white text-md mt-2">{title}</p>
        <p className="font-montserrat font-medium text-white text-sm tracking-wide ">
          {releaseDate.substring(0, 4)} | {formatDuration(runtime)} | RATING:{" "}
          {rating}/10
        </p>
      </div>
    </div>
  )
}

export default MovieCard
