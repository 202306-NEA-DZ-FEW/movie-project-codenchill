import React from "react"

export default function ActorData({ actor }) {
  const { name, profile_path, id } = actor

  return (
    <div>
      <li key={id}>
        <img
          src={`https://image.tmdb.org/t/p/w500${profile_path}`}
          alt={name}
        />
        <p>{name}</p>
      </li>
    </div>
  )
}
