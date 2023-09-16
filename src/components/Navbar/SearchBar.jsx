import React, { useState, useEffect, useRef } from "react"
import { fetchData } from "@/Utility/api"

export default function SearchBar() {
  const [query, setQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [error, setError] = useState(null)

  // Use a ref to keep track of the input element
  const inputRef = useRef(null)

  // Add an event listener to track when the input field loses focus
  useEffect(() => {
    const handleBlur = () => {
      // Check if the input value is empty
      if (inputRef.current && inputRef.current.value === "") {
        // Clear the search results
        setSearchResults([])
      }
    }

    // Attach the event listener to the input element
    if (inputRef.current) {
      inputRef.current.addEventListener("blur", handleBlur)
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener("blur", handleBlur)
      }
    }
  }, [])

  const search = async (e) => {
    e.preventDefault()
    console.log("search")
    try {
      const actorSearchAPI = `search/person?include_adult=false&language=en-US&page=1&query=${encodeURIComponent(
        query,
      )}`
      const movieSearchAPI = `search/movie?include_adult=false&language=en-US&page=1&query=${encodeURIComponent(
        query,
      )}`

      const actorData = await fetchData(actorSearchAPI)
      const movieData = await fetchData(movieSearchAPI)

      // Extract titles and actor names from the results
      const titles = movieData.results.map((movie) => movie.title)
      const actorNames = actorData.results.map((actor) => actor.name)

      // Combine titles and actor names into a single array
      const combinedResults = [...titles, ...actorNames].slice(0, 4) // Get the first five results

      setSearchResults(combinedResults)
    } catch (e) {
      console.error(e)
      setError("An error occurred while fetching data.")
    }
  }

  return (
    <div className="flex-1 flex v-screen relative">
      <div className="form-control relative">
        <form onSubmit={search} onChange={search}>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full md:w-96 h-10"
            name="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            ref={inputRef}
          />
        </form>
      </div>
      {searchResults.length > 0 && (
        <div className="group">
          <ul className="absolute left-0 mt-6 space-y-0 bg-white border border-gray-300 max-h-30 w-full">
            {searchResults.map((result, index) => (
              <li
                key={index}
                className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                style={{ width: "100%" }}
              >
                {result}
              </li>
            ))}
          </ul>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  )
}
