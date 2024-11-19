import './Logo.css';

 // Interfaz para el Logo principal del sitio
 interface LogoProps {
    src: string;
    alt: string;
    width: string;
}
export const Logo = ({ src, alt, width } : LogoProps) => {
    return (
        <div className='logo'>
            <img src={src} alt={alt} width={width} />
        </div>
    );
};

export default Logo;


