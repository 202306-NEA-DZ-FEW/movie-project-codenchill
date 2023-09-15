import React from 'react';

const MovieCard = ({ title, releaseDate, imageUrl }) => {
  return (
    <div className="movie-card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{releaseDate}</p>
    </div>
  );
};

export default MovieCard;
