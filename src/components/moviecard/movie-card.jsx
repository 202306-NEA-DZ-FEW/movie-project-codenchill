import Image from "next/image"

const MovieCard = (movie) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`
  const title = movie.title
  const genres = movie.genres
  //const releaseDate = movie.release_date.substring(0, 4)
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
    <div>
      <div className="relative inline-block">
        <div className="absolute space-x-1 inset-0 bg-gradient-to-t from-red-500 via-transparent to-transparent opacity-0 transition rounded-lg duration-300 ease-in-out hover:opacity-70">
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
