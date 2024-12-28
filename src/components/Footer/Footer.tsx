import './Footer.css'

interface FooterProps {
    title: string;
    link1: string;
    img1: string | JSX.Element;
    parentMethod: () => void;
}

export default function Footer({ title, link1, img1, parentMethod }: FooterProps) {
    return (
        <footer className="foot">
          <div className='footer-info'>
            <p>{title}</p>
          </div>
          <div className='footer-links'>
            <button className='contact' onClick={parentMethod}>Contacto</button>
          </div>
          <div className='footer-icons'>
            <a href={link1}>{img1}</a> 
          </div>
        </footer>
    )
}