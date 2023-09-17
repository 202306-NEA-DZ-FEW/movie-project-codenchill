import React from "react"
import Link from "next/link" // Import Link from Next.js

export default function ActorData({ actor }) {
  return (
    <div>
      <ul>
        <li key={actor.id}>
          {/* Use Link to navigate to ActorDetails */}
          <Link href={`/actor/${actor.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}
