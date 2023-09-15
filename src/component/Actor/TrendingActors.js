import React, { useEffect, useState } from "react"
import ActorData from "./ActorData"

export default function TrendingActors() {
  const [actors, setActors] = useState([])

  useEffect(() => {
    const fetchTrendingActors = async () => {
      try {
        const apiKey = "b4440ac3a64d7a1c7860a89d98e9ab12"
        const url = `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=en-US&page=1`

        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDQ0MGFjM2E2NGQ3YTFjNzg2MGE4OWQ5OGU5YWIxMiIsInN1YiI6IjY1MDFkM2I0ZTBjYTdmMDBjYbViMTBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sdb2YMTp6rF92nHwh7zxf2PmeXtSR_R32x6z1SE1VWw",
          },
        }

        const response = await fetch(url, options)
        const data = await response.json()

        if (response.ok) {
          // Filter actors with gender 2 (male)
          const maleActors = data.results.filter((actor) => actor.gender === 2)
          setActors(maleActors)
        } else {
          throw new Error(`Request failed with status ${response.status}`)
        }
      } catch (error) {
        console.error("Error fetching trending actors:", error)
      }
    }

    fetchTrendingActors()
  }, [])

  return (
    <div>
      <h1>Trending Actors</h1>
      <ul>
        {actors.map((actor) => (
          <ActorData key={actor.id} actor={actor} />
        ))}
      </ul>
    </div>
  )
}
