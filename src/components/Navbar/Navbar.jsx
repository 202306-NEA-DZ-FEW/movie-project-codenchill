import React from "react"
import LogoNTitles from "./LogoNTitle"
import SearchBar from "./SearchBar"
import GenresNavButton from "./GenersNavButton"
import ActorsNavButton from "./ActorsNavbButton"
import MovieNavButton from "./MovieNavButton"

export default function Navbar() {
  return (
    <div className="bg-gradient-to-r">
      <div className="rounded bg-gradient-to-l to-gray-800 from-red-400 flex flex-row ml-4 mr-4 p-2">
        {/* Logo and Website Title */}
        <div className="basis-1/4">
          {" "}
          <LogoNTitles />{" "}
        </div>

        {/* Centered Search Bar */}
        <div className="basis-1/2">
          {" "}
          <SearchBar />{" "}
        </div>

        {/* Right Section (Genres, Movies, Actors) */}
        <div className="basis-1/4 flex-row-reverse flex">
          {/* Dropdown Menu for Genres */}

          <GenresNavButton />

          {/* Dropdown Menu for Movies */}
          <MovieNavButton />

          {/* Actors Link */}
          <ActorsNavButton />
        </div>
      </div>
    </div>
  )
}
