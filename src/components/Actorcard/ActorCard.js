import Image from "next/image"
import React from "react"

export default function ActorCard({ actor }) {
  const { name, profile_path, id } = actor

  return (
    <div>
      <li key={id}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${profile_path}`}
          alt={name}
          width={500}
          height={500}
        />
        <p>{name}</p>
      </li>
    </div>
  )
}
