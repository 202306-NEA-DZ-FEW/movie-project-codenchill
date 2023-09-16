import Image from "next/image"

const MovieCard = (movie) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`
  const title = movie.title
  const genres = movie.genre_ids
  console.log(genres)
  const releaseDate = movie.release_date.substring(0, 4)
  const renderGenres = () => {
    return genres.map((genre, index) => (
      <button
        key={index}
        className={`bg-gray-800 text-white px-2 py-1 m-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out`}
      >
        {genre}
      </button>
    ))
  }
  return (
    <div>
      <div className="w-200">
        <div className="absolute bottom-0 left-0 right-0 top-auto h-full w-fit bg-gradient-to-t from-red-500 via-transparent to-transparent opacity-0 transition rounded-lg duration-300 ease-in-out hover:opacity-70"></div>
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
