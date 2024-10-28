import './App.css';
import './styles/Header.css';
import './styles/Features.css';
import './styles/Logo.css'
import './styles/Footer.css';
import './styles/Cards.css';
import './styles/Home.css';
import './styles/Learn.css';
import './styles/Gallery.css';
import './styles/Contact.css';
import './styles/NotFound.css'
import Header from './components/Header';
import Footer from './components/Footer';

function App( { children } ) {

  return (
    <div className='App'>
      <Header brandName='ChessKindgom' brandURL='/' navLinks={[
        { name: 'Home', url: '/home' },
        { name: 'Learn', url: '/learn' },
        { name: 'Gallery', url: '/gallery' },
        { name: 'Contact', url: '/contact' },
      ]} />
      { children }
      <Footer />
    </div>
  )
}

export default App;