import React from "react"
import Image from "next/image"
import Link from "next/link"
export default function LogoNTitles() {
  return (
    <div className="flex-1 flex items-center">
      <Link href={"/"}>
        <Image
          src="/path/to/your/logo.png"
          alt="Logo"
          className="w-10 h-10 mr-2"
          width={200}
          height={200}
        />
      </Link>
      <Link href={"/"}>
        <p className="text-xl font-bold">C&apos;Chill</p>
      </Link>
    </div>
  )
}
