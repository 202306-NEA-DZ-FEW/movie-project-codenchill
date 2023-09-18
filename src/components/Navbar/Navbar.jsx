import React from "react"
import LogoNTitles from "./LogoNTitle"
import SearchBar from "./SearchBar"
import GenresNavButton from "./GenersNavButton"
import ActorsNavButton from "./ActorsNavbButton"
import MovieNavButton from "./MovieNavButton"

export default function Navbar() {
  return (
    <nav className="rounded m-4 bg-blue-50 flex flex-row p-2 ">
      {/* Logo and Website Title */}
      <div className="basis-1/4"> <LogoNTitles /> </div>
      

      {/* Centered Search Bar */}
      <div className="basis-1/2">  <SearchBar /> </div>
     

      {/* Right Section (Genres, Movies, Actors) */}
      <div className="basis-1/4 flex-row-reverse flex">
        {/* Dropdown Menu for Genres */}
         
        <GenresNavButton  />

        {/* Dropdown Menu for Movies */}
        <MovieNavButton />

        {/* Actors Link */}
        <ActorsNavButton />
      </div>
    </nav>
  )
}
