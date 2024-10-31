import App from '../App';
import { ChampionsList } from '../data/ChampionsList';
import Campeones from '../components/Campeones';
import ChampsApi from '../components/ChampsApi';
function Gallery() {

  return (
    <App>
      <div className="gallery">
        <h4 className="galleryTitle">Galería de campeones mundiales</h4>
        <h6 className='gallerySubtitle'>Estos son, del primero a la actualidad, los 17 campeones mundiales: </h6>
        <div className='gallery-container'>
          <Campeones ChampionsList={ChampionsList} />
          <div>
            <ChampsApi />   {/* Se renderiza el componente ChampsApi, que conecta con la API de mockapi con datos sobre los campeones */}
          </div> 
        </div>
      </div>
    </App>
  )
}

export default Gallery
