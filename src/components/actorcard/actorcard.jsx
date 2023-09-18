import React from "react"
import Link from "next/link" // Import Link from Next.js
import Image from "next/image"

export default function ActorCard(actor) {
  return (
    <div>
      <ul>
        <li key={actor.id}>
          {/* Use Link to navigate to ActorDetails */}
          <Link href={`/actor/${actor.id}`}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
              width={200}
              height={200}
            />
            <p>{actor.name}</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}
