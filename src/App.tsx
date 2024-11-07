import './App.css';
import './Pages/Home/Home';
import { Footer }  from './components';
import { Header } from './components';

export default function App( { children }: { children: React.ReactNode }) {

  return (
    <div className='App'>
      <Header brandName='ChessKindgom' brandURL='/' navLinks={[
        { name: 'Home', url: '/home' },
        { name: 'Learn', url: '/learn' },
        { name: 'Gallery', url: '/gallery' },
        { name: 'Contact', url: '/contact' },
      ]} />
      {children}
      <Footer />
    </div>
  )
}