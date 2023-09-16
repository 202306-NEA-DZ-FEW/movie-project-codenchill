import React from "react";

export default function TrailerPlayer({ youtubeVideoId }) {
  if (!youtubeVideoId) {
    return <p>No trailer available</p>;
  }

  // Construct the YouTube embed URL
  const youtubeUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;

  return (
    <div className="trailer-player">
      <iframe
        width="560"
        height="315"
        src={youtubeUrl}
        title="YouTube Video Player"
        allowFullScreen
      ></iframe>
    </div>
  );
}
