import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"

export default function ActorDetails() {
  const router = useRouter()
  const { id } = router.query
  const [actorDetails, setActorDetails] = useState(null)

  useEffect(() => {
    const fetchActorDetails = async () => {
      try {
        const apiKey = "b4440ac3a64d7a1c7860a89d98e9ab12"
        const url = `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US`
        const options = {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDQ0MGFjM3E2NGQ3YTFjNzg2MGE4OWQ5OGU5YWIxMiIsInN1YiI6IjY1MDFkM2I0ZTBjYTdmMDBjYmViMTBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sdb2YMTp6rF92nHwh7zxf2PmeXtSR_R32x6z1SE1VWw",
          },
        }

        const response = await fetch(url, options)
        const data = await response.json()

        if (response.ok) {
          setActorDetails(data)
        } else {
          throw new Error(`Request failed with status ${response.status}`)
        }
      } catch (error) {
        console.error("Error fetching actor details:", error)
      }
    }

    if (id) {
      fetchActorDetails()
    }
  }, [id])

  if (!actorDetails) {
    return <div>Loading...</div>
  }

  // Log actorDetails to the console
  console.log("Actor Details:", actorDetails)

  return null // Return null as we're not rendering any UI
}
