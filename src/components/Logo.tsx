import React from 'react';

 // Interfaz para especificar los props que espera el componente (para renderizar imagen principal)
 interface LogoProps {
    src: string;
    alt: string;
    width: string;
}
function Logo ({ src, alt, width } : LogoProps) {
    return (
        <div className='logo'>
            <img src={src} alt={alt} width={width} />
        </div>
    );
};

export default Logo;

