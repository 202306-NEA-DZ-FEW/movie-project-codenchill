import React, { useEffect, useState } from "react";
import MovieInfo from "@/components/SingleMovieCard/MovieInfo";
import TrailerPlayer from "@/components/SingleMovieCard/TrailerPlayer";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

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
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setMovies(data.results);

        // Select the first movie to display
        if (data.results.length > 0) {
          setSelectedMovie(data.results[0]);
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      {selectedMovie && <MovieInfo {...selectedMovie} />}

      {/* Check if selectedMovie has a trailer and render the TrailerPlayer */}
      {selectedMovie && selectedMovie.youtubeVideoId && (
        <TrailerPlayer youtubeVideoId={selectedMovie.youtubeVideoId} />
      )}
    </>
  );
}
