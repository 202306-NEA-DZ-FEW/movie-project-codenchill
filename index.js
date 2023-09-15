import React, { useEffect, useState } from 'react';
import MovieCard from "../components/movie/movie-card"
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ... Your data fetching code here ...
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          releaseDate={movie.release_date}
          imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      ))}
    </div>
  );
};

export default Home; 