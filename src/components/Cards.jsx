import { useState } from 'react';  
import PropTypes from 'prop-types';


function Cards( { cardsItems } ) {
  return (
    <>
      <div className='card-container'>
        {cardsItems.map((card) => (       // Se mapea cardsItems generando una key para cada Card (función debajo)
          <Card key={card.id} cardData={card}/> // "cardData" contiene toda la información total de cardsItems, que será parámetro de la función Card.
        ))}
      </div>
    </>
  );
} // Esta identificación de cada card con la key 'card.id' permite que la función isClicked se ejecute de a 1 card a la vez y no en todas al mismo tiempo.

function Card({ cardData }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(true);
    setTimeout(() => {setIsClicked(false)}, 2000);
  };

  return (
    <div className='cardItem' key={cardData.id}>  {/* La clave del mapeo anterior: cada key permite identificar cada card de forma única */}
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
      {isClicked && <h4 className='unavailable'>Sección disponible en breve...</h4>}  {/* Entonces isClicked funciona de a una card a la vez */}
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