import React, { useState } from "react"

export default function MovieNavButton() {
  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  return (
    <div className="relative inline-block text-left">
      <div className="group">
        <button
          onClick={toggleDropdown} // Toggle the dropdown on button click
          className="bg-transparent border-2 border-transparent rounded-md p-2 hover:border-blue-500 focus:outline-none"
        >
          Movies
        </button>
        {/* Movies dropdown content */}
        {showDropdown && ( // Show the dropdown if showDropdown is true
          <ul className="absolute left-0 mt-2 space-y-1 bg-white border border-gray-300">
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
        )}
      </div>
    </div>
  )
}
