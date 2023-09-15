
import React, { useEffect, useState } from "react";
import MovieInfo from "@/components/SingleMovieCard/MovieInfo";
import Navbar from "@/components/Navbar/Navbar";

 
 export default function Home({movieInfo}){
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
              {
                headers: {
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDQ0MGFjM2E2NGQ3YTFjNzg2MGE4OWQ5OGU5YWIxMiIsInN1YiI6IjY1MDFkM2I0ZTBjYTdmMDBjYmViMTBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sdb2YMTp6rF92nHwh7zxf2PmeXtSR_R32x6z1SE1VWw",
                  Accept: "application/json",
                },
              },
            )
    
            if (!response.ok) {
              throw new Error("Network response was not ok")
            }
    
            const data = await response.json()
            setMovies(data.results)
          } catch (error) {
            console.error("Error fetching movie data:", error)
          }
        }
        fetchData()
      }, [])



   return (

       <>
       <Navbar />
       <MovieInfo />
       
       </>

   )
 }
 