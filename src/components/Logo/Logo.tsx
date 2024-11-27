import './Logo.css';

 // Interfaz para el Logo principal del sitio
 interface LogoProps {
    src: string;
    alt: string;
    className: string;
}

export const Logo = ({ src, alt, className } : LogoProps) => {
    return (
        <div className='logo'>
            <img src={src} alt={alt} className={className} />
        </div>
    );
};

export default Logo;


