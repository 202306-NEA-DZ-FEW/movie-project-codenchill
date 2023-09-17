// import Image from "next/image"
// Image
// import { StarIcon } from "@heroicons/react/solid" // Import the star icon

// const MovieCard = ({ title, releaseDate, imageUrl, duration, rating }) => {
//   const durationHours = Math.floor(duration / 60)
//   const durationMinutes = duration % 60

//   return (
//     <div className="card w-96 bg-base-100 shadow-xl relative">
//       <figure className="px-10 pt-10 relative">
//         <div className="absolute bottom-0 left-0 right-0 top-auto h-full w-fit bg-gradient-to-t from-red-500 via-transparent to-transparent opacity-0 transition rounded-lg duration-300 ease-in-out hover:opacity-70"></div>
//         <img src={imageUrl} alt={title} className="rounded-xl" />
//       </figure>
//       <div className="absolute bottom-0 left-0 bg-black bg-opacity-75 text-white p-2 space-x-1">
//         <span className="text-xs">RATING:</span>
//         <span className="text-lg">{rating}</span>
//         <StarIcon className="w-4 h-4 inline" />
//         <span className="text-xs">/10</span>
//       </div>
//       <div className="card-body items-center text-center">
//         <h2 className="card-title">{title}</h2>
//         <div className="flex justify-center items-center space-x-4">
//           <p className="text-sm">{releaseDate}</p>
//           <p className="text-sm">{`${durationHours}h ${durationMinutes}m`}</p>
//         </div>
//         <div className="card-actions"></div>
//       </div>
//     </div>
//   )
// }

// export default MovieCard
import Image from "next/image"

const MovieCard = (movie) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`
  const title = movie.title
  const genres = movie.genre_ids
  //const releaseDate = movie.release_date.substring(0, 4)
  const renderGenres = () => {
    return genres.map((genre, index) => (
      <button
        key={index}
        className="btn rounded-full font-montserrat text-sm mt-2 px-2 py-1"
      >
        {genre}
      </button>
    ))
  }
  return (
    <div>
      <div className="relative w-auto h-auto">
        <div className="absolute bottom-0 left-0 right-0 top-auto h-full w-fit bg-gradient-to-t from-red-500 via-transparent to-transparent opacity-0 transition rounded-lg duration-300 ease-in-out hover:opacity-70">
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
        <p className="font-montserrat text-sm mt-2">{title}</p>
      </div>
    </div>
  )
}

export default MovieCard
