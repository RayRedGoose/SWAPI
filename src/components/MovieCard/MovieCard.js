import React from 'react';
import CharactersPage from '../CharactersPage/CharactersPage'
import './MovieCard.scss';

const MovieCard = ({episode, title, year, changePage, scroll, characters, user, logOut, setSharedData, sharedData}) => {
  const createSharedData = () => {
    const movieData = {episode, title, year, scroll, characters}
    {setSharedData(movieData)}
  }
  const createCharactersPage = () => {
    return <CharactersPage
            sharedData={sharedData}
            user={user}
            logOut={logOut}
            />
  }
  const openCharacterPage = () => {
    {createSharedData()}
    {changePage()}
    {createCharactersPage()}
  }
  return (
    <section className="movie-card">
      <h3>Episode {episode}</h3>
      <h4>{title}</h4>
      <p>{year}</p>
      <button onClick={openCharacterPage}>View characters</button>
    </section>
  )
}

export default MovieCard;
