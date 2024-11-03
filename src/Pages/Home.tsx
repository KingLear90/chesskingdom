import React from 'react'
import Features from '../components/Features'
import { Logo } from '../components'
import App from '../App'

function Home () {
  let features: object[] = [     // variable features tipada para que solo pueda ser un array de objetos y no otra cosa. 
    {
      src: '', 
      title: "Fundamentos del ajedrez",
    },
    {
      src: '',
      title: "Principios teóricos",
    },
    {
      src: '',
      title: "Grandes partidas clásicas",
    },
    {
      src: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-images"><path d="M18 22H4a2 2 0 0 1-2-2V6"/><path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"/><circle cx="12" cy="8" r="2"/><rect width="16" height="16" x="6" y="2" rx="2"/></svg>,
      title: "Galería de imágenes",
    },
    {
      src: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>,
      title: "Videos",
    },
    {
      src: '',
      title: "¡Y MUCHO MÁS!",
    },
  ]

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
