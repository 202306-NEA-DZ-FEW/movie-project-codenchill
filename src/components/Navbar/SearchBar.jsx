import React, { useState } from "react"
import { fetchData } from "@/Utility/api"
import Link from "next/link"

export default function SearchBar() {
  const [query, setQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [error, setError] = useState(null)


  const search = async (e) => {
    e.preventDefault()
    // console.log("search")
    try {
      const removedSpecialChars = query.replace(
        /[!@#$%^&*()_+{}\[\]:;<>,.?~\\\/-]/g,
        "",
      )

      // Replace spaces with plus symbols
      const cleanedQuery = removedSpecialChars.replace(/\s+/g, "+")
      const actorSearchAPI = `search/person?include_adult=false&language=en-US&page=1&query=${encodeURIComponent(
        cleanedQuery,
      )}`
      const movieSearchAPI = `search/movie?include_adult=false&language=en-US&page=1&query=${encodeURIComponent(
        cleanedQuery,
      )}`
      const actorData = await fetchData(actorSearchAPI)
      const movieData = await fetchData(movieSearchAPI)
      // Extract titles and actor names from the results
      const movieArray = movieData.results.map((movie) => ({
        title: movie.title,
        id: movie.id,
        type: "movie",
      }))
      const actorArray = actorData.results.map((actor) => ({
        title: actor.name,
        id: actor.id,
        type: "actor",
      }))

      // Combine titles and actor names into a single array
      const combinedResults = [...movieArray, ...actorArray].slice(0, 4) // Get the first four results

      setSearchResults(combinedResults)
    } catch (e) {
      console.error(e)
      setError("An error occurred while fetching data.")
    }
  }

  return (
    <div className=" v-screen  w-auto relative ">
      <div className="form-control relative ">
        <form
          onFocus={search}
          onSubmit={search}
          onChange={search}
          autoComplete="off"
        >
          <input
            type="text"
            placeholder="I'm looking for ..."
            className="input input-bordered w-full h-10 px-4 py-2 rounded-full italic text-center border border-gray-500 justify-center items-center gap-12 inline-flex"
            name="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>
      {searchResults.length > 0 && (
        <div className="group ">
          <ul className="px-4 z-20 py-2 rounded-[32px] absolute left-0 mt-6 space-y-0 bg-white border border-gray-300 max-h-30 w-full">
            {searchResults.map((result, index) => (
              <li
                key={index}
                className="block px-4 py-2 hover:bg-custom-color hover:text-white"

                style={{ width: "100%" }}
                onClick={() => {
                  // Update searchResults to an empty array
                  setSearchResults([])
                  setQuery("")
                }}
              >
                <Link
                  href={
                    result.type === "movie"
                      ? `/movie/${result.id}`
                      : `/actor/${result.id}`
                  }
                >
                  {result.type === "movie" ? result.title : result.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  )
}
