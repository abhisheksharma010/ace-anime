import React from 'react';
import Card from './Card'; // Assuming Card component is in a separate file

const Dala = ({ animeData }) => {
    return (
      <div className="anime-list">
        {animeData.map(anime => (
          <Card key={anime.animeId} anime={anime} />
        ))}
      </div>
    );
  };
export default Dala;
