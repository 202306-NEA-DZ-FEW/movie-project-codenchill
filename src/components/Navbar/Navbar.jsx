import React, { useEffect, useState } from "react"

export default function Navbar() {
  const [genres, setGenres] = useState([])

  // Simulated API fetch for genres (replace with your API fetch logic)
  useEffect(() => {
    // Replace this with your actual API endpoint for fetching genres
    const apiUrl = "https://your-api-url.com/genres"

    // Simulated API response (replace with your API fetch logic)
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.genres)
      })
      .catch((error) => {
        console.error("Error fetching genres:", error)
      })
  }, [])

  return (
    <div className="navbar bg-base-100">
      {/* Logo and Website Title */}
      <div className="flex-1 flex items-center">
        <img
          src="/path/to/your/logo.png"
          alt="Logo"
          className="w-10 h-10 mr-2"
        />
        <a className="text-xl font-bold">Chill</a>
      </div>

      {/* Centered Search Bar */}
      <div className="flex-1 flex v-screen">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full md:w-64"
          />
        </div>
      </div>

      {/* Right Section (Genres, Movies, Actors) */}
      <div className="flex-none">
        {/* Dropdown Menu for Genres */}
        <div className="relative inline-block text-left">
          <div className="group">
            <button className="bg-transparent border-2 border-transparent rounded-md p-2 hover:border-blue-500 focus:outline-none">
              Genres
            </button>
            {/* Genres dropdown content */}
            <ul className="hidden absolute left-0 mt-2 space-y-1 bg-white border border-gray-300 group-hover:block">
              {genres.map((genre) => (
                <li key={genre.id}>
                  <a
                    href={`/genre/${genre.id}`}
                    className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                  >
                    {genre.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dropdown Menu for Movies */}
        <div className="relative inline-block text-left">
          <div className="group">
            <button className="bg-transparent border-2 border-transparent rounded-md p-2 hover:border-blue-500 focus:outline-none">
              Movies
            </button>
            {/* Movies dropdown content */}
            <ul className="hidden absolute left-0 mt-2 space-y-1 bg-white border border-gray-300 group-hover:block">
              <li>
                <a
                  href="#top-rated"
                  className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  Top Rated
                </a>
              </li>
              <li>
                <a
                  href="#popular"
                  className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  Popular
                </a>
              </li>
              <li>
                <a
                  href="#latest"
                  className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  Latest
                </a>
              </li>
              <li>
                <a
                  href="#now-playing"
                  className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  Now Playing
                </a>
              </li>
              <li>
                <a
                  href="#upcoming"
                  className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  Upcoming
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Actors Link */}
        <a
          href="#actors"
          className="bg-transparent border-2 border-transparent rounded-md p-2 hover:border-blue-500 focus:outline-none"
        >
          Actors
        </a>
      </div>
    </div>
  )
}