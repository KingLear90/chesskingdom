import React from 'react';
import { useState } from 'react';  
import PropTypes from 'prop-types';


function Cards( { cardsItems } ) {
  return (
    <>
      <div className='card-container'>
        {cardsItems.map((card) => (
          <Card key={card.id} cardData={card}/>
        ))}
      </div>
    </>
  );
}

function Card({ cardData }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(true);
    setTimeout(() => {setIsClicked(false)}, 2000);
  };

  return (
    <div className='cardItem' key={cardData.id}>
      <h5>{cardData.title}</h5>
      <img
        className='imgs'
        src={cardData.src}
        alt={cardData.alt}
        width={cardData.imgSize}
      />
      <p className='card-Descrip'>{cardData.description}</p>
      <button className='learn-btn' onClick={handleCardClick}>
        CONOCER MÁS
      </button>
      {isClicked && <h4 className='unavailable'>Sección disponible en breve...</h4>}
    </div>
  );
}

Cards.propTypes = {
  cardsItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,   

    })
  ).isRequired,
};

export default Cards;