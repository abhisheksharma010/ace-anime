import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './Trending.css';

const TrendingStyled = styled.div`
`

const Card = ({ anime }) => {
  const { animeTitle, animeImg } = anime;

  return (
    <TrendingStyled className='trendrotate'>
      <figure>
        <img src={animeImg} alt={animeTitle} />
        <figcaption>
          <h5>{animeTitle}</h5>
        </figcaption>
      </figure>
    </TrendingStyled>
  );
};

const AnimeList = ({ animeData }) => {
  return (
    <div className="anime-list">
      {animeData.map((anime) => (
        <Card key={anime.animeId} anime={anime} />
      ))}
    </div>
  );
};

const AnimeMoive = () => {
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    fetch('https://gogo-api-nmye.onrender.com/anime-movies')
      .then(response => response.json())
      .then(data => {
        setAnimeData(data);
      })
      .catch(error => {
        console.error('Error fetching anime data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Anime Movie</h1>
      <AnimeList animeData={animeData} />
    </div>
  );
};

export default AnimeMoive;
