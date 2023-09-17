import React, { useState } from "react"
import Link from "next/link"
export default function MovieNavButton() {
  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  return (
    <div className="relative inline-block text-left z-10">
      <div className="group">
        <button
          onClick={toggleDropdown} // Toggle the dropdown on button click
          className="bg-transparent border-2 border-transparent rounded-md p-2 hover:border-blue-500 focus:outline-none"
        >
          Movies
        </button>
        {/* Movies dropdown content */}
        {showDropdown && ( // Show the dropdown if showDropdown is true
          <ul className="absolute left-0 mt-2 space-y-1 bg-white border border-gray-300 z-10">
            <li>
              <Link
                href={"/movies/category/top_rated"}
                className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
              >
                Top Rated
              </Link>
            </li>
            <li>
              <Link
                href={"/movies/category/popular"}
                className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
              >
                Popular
              </Link>
            </li>

            <Link
              href={"/movies/category/latest"}
              className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
            >
              <li>Latest</li>
            </Link>
            <Link
              href={"/movies/category/now_playing"}
              className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
            >
              {" "}
              <li>Now Playing</li>
            </Link>
            <Link
              href={"/movies/category/upcoming"}
              className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
            >
              <li>Upcoming</li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  )
}
