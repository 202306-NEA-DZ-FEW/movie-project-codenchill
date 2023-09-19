import Image from "next/image"
import React from "react"

export default function ActorCard(actor) {
  return (
    <div>
      <div className="relative w-auto h-auto">
        <Image
          className="rounded-lg"
          src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
          alt={actor.name}
          width={200}
          height={200}
          quality={100}
        />
      </div>
      <div className="items-center w-200 h-200">
        <p className="font-montserrat text-sm mt-2">{actor.name}</p>
      </div>
    </div>
  )
}
