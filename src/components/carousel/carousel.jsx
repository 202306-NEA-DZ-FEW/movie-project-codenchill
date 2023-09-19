import React from "react"
import Image from "next/image"
import Link from "next/link"
export default function Carousel({ movie, index }) {
  return (
    <div>
      <div className="carousel w-full">
        <div id={`${index}`} className="carousel-item w-full">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            className="w-full"
            width={200}
            height={200}
            alt={movie.title}
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <Link href={`#${index}`} className="btn btn-xs">
          {index}
        </Link>
      </div>
    </div>
  )
}
