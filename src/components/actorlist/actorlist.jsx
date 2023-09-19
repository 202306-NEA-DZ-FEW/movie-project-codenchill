import React from "react"
import Link from "next/link"
import ActorCard from "../Actorcard/ActorCard"
import actorcard from "../actorcard/actorcard"


export default function ActorList({ actors }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4 justify-center items-center">
      {actors.map((actor, index) => (
        <Link key={actor.id} href={`/actors/${actor.id}`}>
          <ActorCard id={index} key={actor.id} {...actor} />
        </Link>
      ))}
    </div>
  )
}
