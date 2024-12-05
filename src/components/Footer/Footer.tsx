import './Footer.css'

interface FooterProps {
    title: string;
    terminos: string;
    link1: string;
    img1: string | JSX.Element;
    link2: string;
    img2: string | JSX.Element;
    parentMethod: () => void;
}

export default function Footer({ title, terminos, link1, img1, link2, img2, parentMethod }: FooterProps) {
    return (
        <footer className="foot">
          <div className='footer-info'>
            <p>{title}</p>
          </div>
          <div className='footer-links'>
            <button className='contact' onClick={parentMethod}>Contacto</button>
            <p><a href={terminos} className='rights'>Privacy Policy</a></p>
          </div>
          <div className='footer-icons'>
            <a href={link1}>{img1}</a> 
            <a href={link2}>{img2}</a>
          </div>
        </footer>
    )
}