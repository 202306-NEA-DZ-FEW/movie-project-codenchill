import React from "react"
import LogoNTitles from "./LogoNTitle"
import SearchBar from "./SearchBar"
import GenresNavButton from "./GenersNavButton"
import ActorsNavButton from "./ActorsNavbButton"
import MovieNavButton from "./MovieNavButton"

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      {/* Logo and Website Title */}
      <LogoNTitles />

      {/* Centered Search Bar */}
      <SearchBar />

      {/* Right Section (Genres, Movies, Actors) */}
      <div className="flex-none">
        {/* Dropdown Menu for Genres */}

        <GenresNavButton />

        {/* Dropdown Menu for Movies */}
        <MovieNavButton />

        {/* Actors Link */}
        <ActorsNavButton />
      </div>
    </div>
  )
}
