import Image from "next/image"

const MovieCard = (movie) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`
  const title = movie.title
  const genres = movie.genres
  //const releaseDate = movie.release_date.substring(0, 4)
  const renderGenres = () => {
    return genres.map((genre, index) => (
      <button
        key={index}
        className="btn rounded-full font-montserrat text-sm mt-2 px-2 py-1"
      >
        {genre.name}
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
