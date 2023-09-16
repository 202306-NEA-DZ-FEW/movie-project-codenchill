import { fetchData } from "@/Utility/api"
import Image from "next/image"

export default function Home({ data }) {
  const imageUrl = "https://image.tmdb.org/t/p/original"
  return (
    <div>
      <div className="carousel w-full relative -z-1">
        {data.map((movie, index) => (
          <Image
            id={index}
            key={movie.id} // Remember to add a unique key when mapping
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            className="w-full h-screen carousel-item"
            alt="Movie backdrop"
            width={0} // These values are set to 0, which means the browser will determine the size based on the aspect ratio.
            height={0}
            sizes="100vw"
            quality={100}
          />
        ))}
      </div>
      <div
        className="flex justify-center w-full py-2 gap-2 absolute bottom-0"
        title=""
      >
        <a href="#1" className="btn btn-xs w-8 h-8 hover:no-underline">
          1
        </a>
        <a href="#2" className="btn btn-xs w-8 h-8">
          2
        </a>
        <a href="#3" className="btn btn-xs w-8 h-8">
          3
        </a>
        <a href="#4" className="btn btn-xs w-8 h-8">
          4
        </a>
      </div>
    </div>
  )

  {
    /* <div className="w-full carousel box">
        {data.map((movie) => (
    <Image
      key={movie.id} // Remember to add a unique key when mapping
      src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
      className="w-full h-screen carousel-item "
      alt="Movie backdrop"
       width={0} // These values are set to 0, which means the browser will determine the size based on the aspect ratio.
       height={0}
       sizes="100vw"
            quality={100}
    />
  ))}
      </div> 
    </div>*/
  }
}
// export async function getStaticPaths() {
//   const res = await fetchData("trending/movie/day?language=en-US")
//   console.log(res)
//   const movies = res.results.slice(0, 4)
//   // Get the paths we want to pre-render based on posts
//   const paths = movies.map((movie) => ({
//     params: { id: movie.id },
//   }))
//   // We'll pre-render only these paths at build time.
//   // { fallback: 'blocking' } will server-render pages
//   // on-demand if the path doesn't exist.
//   return { paths, fallback: "blocking" }
// }
export async function getStaticProps() {
  const data = await fetchData("trending/movie/day?language=en-US")
  return {
    props: {
      data: data.results.slice(0, 5),
    },
  }
}
