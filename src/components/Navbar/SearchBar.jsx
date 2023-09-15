import React from "react"

export default function SearchBar() {
  return (
    <div className="flex-1 flex v-screen">
      <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full md:w-64"
        />
      </div>
    </div>
  )
}
