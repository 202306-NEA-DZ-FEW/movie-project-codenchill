import Link from "next/link"
import React from "react"

export default function ActorsNavButton() {
  return (
    <Link
      href="/actors"
      className="bg-transparent border-2 border-transparent rounded-md p-2 hover:border-blue-500 focus:outline-none"
    >
      Actors
    </Link>
  )
}
