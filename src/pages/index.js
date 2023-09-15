import React from "react"
import ReactDOM from "react-dom"
import ActorData from "../component/Actor/ActorData"
import TrendingActors from "../component/Actor/TrendingActors"
// import ActorsCard from "@/component/Actors/ActorCard"

export default function Home() {
  return (
    <div>
      {/* <ActorData /> */}
      <TrendingActors />
      {/* <ActorsCard /> */}
    </div>
  )
}
