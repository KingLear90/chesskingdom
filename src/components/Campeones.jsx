import React from 'react';
import { ChampionsList } from '../data/ChampionsList';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Campeones( {ChampionsList} ) {

  const [index, setIndex] = useState(0);

  function handleNext() {
    setIndex(index + 1);
    index === ChampionsList.length - 1 ? setIndex(0) : setIndex(index + 1);
  }

  function handlePrevious() {
    setIndex(index - 1);
    index === 0 ? setIndex(ChampionsList.length - 1) : setIndex(index - 1);
  }

  let campeon = ChampionsList[index];

  return (
    <div>
      <div className='campeon-container'>
        <img className='champions' src={campeon.src} 
            width={campeon.width} 
            height={campeon.height}
            alt={campeon.alt}
        />
        <span>{campeon.id} {campeon.nombre}</span>
      </div>
      <div className='gallery-btns'>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={handlePrevious} width="38" height="34" viewBox="0 0 24 24" fill="green" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="previousArrow"><path d="M18 15h-6v4l-7-7 7-7v4h6v6z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={handleNext} width="38" height="34" viewBox="0 0 24 24" fill="green" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="nextArrow"><path d="M6 9h6V5l7 7-7 7v-4H6V9z"/></svg>
      </div>
    </div>
      )
}

Campeones.propTypes = {
  ChampionsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Campeones