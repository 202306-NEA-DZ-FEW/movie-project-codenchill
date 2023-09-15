import { fetchData } from "@/Utility/api"
import Image from "next/image"

export default function Home({ data }) {
  const imageUrl = `https://image.tmdb.org/t/p/original${data.results[0].backdrop_path}`
  return (
    <div>
      <h1>{JSON.stringify(data.results[0].backdrop_path)}</h1>
      <div className="w-full carousel box">
        <div className="carousel-item w-full">
          <Image
            src={imageUrl}
            className="w-full h-screen"
            alt="Tailwind CSS Carousel component"
            width={0}
            height={0}
            sizes="100vw"
            quality={100}
          />
        </div>
        <div className="carousel-item w-full">
          <Image
            src="/images/Color-Palette10-1.png"
            className="w-full h-screen"
            alt="Tailwind CSS Carousel component"
            width={0}
            height={0}
            sizes="100vw"
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}
export async function getStaticProps() {
  const data = await fetchData("trending/movie/day?language=en-US")
  return {
    props: {
      data,
    },
  }
}
