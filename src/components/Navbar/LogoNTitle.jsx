import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function LogoNTitles() {
  return (
    <div className="mt-2 ml-3">
      <Link href={"/"}>
        <Image
          src="/images/logo.png"
          alt="Logo"
          className="w-24"
          width={40}
          height={20}
          quality={100}
        />
      </Link>
      
    </div>
  )
}
