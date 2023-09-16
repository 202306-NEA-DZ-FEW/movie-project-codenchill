import Image from "next/image"

Image
const MovieCard = ({ title, releaseDate, imageUrl }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={imageUrl} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{releaseDate}</p>
        <div className="card-actions"></div>
      </div>
    </div>
  )
}

export default MovieCard
