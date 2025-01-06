import { useState } from 'react';  
import './Cards.css';

interface CardProps {
  cardData: {
    id: number;
    title: string;
    src: string;
    alt: string;
    description: string;
    imgSize: string;
  };
}

function Cards({ cardsItems }: { cardsItems: CardProps['cardData'][] }) {
  return (
    <>
      <div className='card-container'>
        {cardsItems.map((card: CardProps['cardData']) => (
          <Card key={card.id} cardData={card} />
        ))}
      </div>
    </>
  );
} // Esta identificación de cada card con la key 'card.id' permite que la función isClicked se ejecute de a 1 card a la vez y no en todas al mismo tiempo.

function Card({ cardData } : CardProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(true);
    setTimeout(() => {setIsClicked(false)}, 2000);
  };

  return (
    <div className='cardItem' key={cardData.id}>  {/* La clave del mapeo anterior: cada key permite identificar cada card de forma única */}
        <div className='card-content'>
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
    </div>
  );
}
export default Cards;