import React from 'react';
import App from '../App';
import Cards from '../Components/Cards';
import BestMoveApi from '../components/BestMoveApi';
import { cardsItems } from '../data/CardsItems';
function Learn() {
  return (
    <App>
      <div className='learn-container'>
        <h5 id='learn-info'>En esta sección podrás encontrar diversas propuestas de aprendizaje para empezar o mejorar tu ajedrez.</h5>
        <div className='main-container'>
          <Cards cardsItems={cardsItems} />
          <BestMoveApi />
        </div>
      </div>
    </App>
  )
}

export default Learn
