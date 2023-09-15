import Image from "next/image"

Image
const MovieCard = ({ title, releaseDate, imageUrl }) => {
  return (
    <div className="movie-card">
      <Image src={imageUrl} alt={title} width={500} height={500} />
      <h2>{title}</h2>
      <p>{releaseDate}</p>
    </div>
  )
}

export default MovieCard
