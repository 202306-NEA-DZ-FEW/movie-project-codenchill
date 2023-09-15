import NavBar from "@/components/Navbar/Navbar"
import MovieInfo from "@/components/SingleMovieCard/MovieInfo"
import Link from "next/link"

export default function Home() {
  return ( 
<>
    <NavBar />
    <MovieInfo />
   


    
    
    {/* <Grid container spacing={3}>
      {latestMovie.results.map((movie, index) => {
        return (
          <Grid key={index} item xs={4}>
            <Link href={`/movies/${movie.id}`}>
              <MovieCard {...movie} />
            </Link>
          </Grid>
        )
      })}
    </Grid> */}
    </>
  ) 
}