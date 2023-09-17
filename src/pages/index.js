// pages/index.js
import React from "react"
import TrendingActors from "../component/Actor/TrendingActors" // Import TrendingActors component

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <TrendingActors />
    </div>
  )
}
