import React from 'react';
import './Logo.css';

 // Interfaz para especificar los props que espera el componente (para renderizar imagen principal)
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


