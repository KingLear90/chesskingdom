import './Home.css';
import App from '../../App';
import { Logo } from '../../components';
import Features from '../../components/Features/Features';
import { features } from '../../data/Features';

function Home () {

  // Creo un objeto (logo) que se adapte a la interfaz LogoProps del componente Logo. 
  let logo = {
    src: './img/the-real-king.png',
    alt: 'Imagen principal del sitio, representada por un rey que aterriza en el tablero y con su poder produce una explosión que desplaza a unos peones cercanos.',
    width: '100%',
  }

  return (
    <App>
      <div>
          <div className='image-container'>
              {/*Extiendo las props del objeto logo a lo que el componente Logo renderiza (en este caso solo una imagen) */}
              <Logo {...logo}/> 
          </div>
          <div className='mainContain'>
              <h4 id="motto">Disfrutar y aprender en un mismo lugar <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="motto-crown"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/></svg></h4>
              <p className="offer">¿Qué podés encontrar en <span className="name">ChessKingdom</span>?</p>
              <Features features={features}/>
              <h4 className='iframeTitle'>¡NO TE LO PIERDAS! ¡Todas las semanas transmisiones en vivo!</h4>
              <iframe src="https://lichess.org/embed/broadcast/european-chess-club-cup--open/f7yEGk0O" className='iframeLichess' frameBorder="0"></iframe>
          </div>
      </div>
    </App>
  )
}

export default Home