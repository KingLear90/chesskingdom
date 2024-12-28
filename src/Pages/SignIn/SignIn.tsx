import { useNavigate } from 'react-router-dom';
import App from '../../App';
import './SignIn.css';
import { useState } from 'react';

function SignIn() {
  
  const navigate = useNavigate(); 

  const toSignUp = () => {
   navigate('/signup')
  }

  const [sesion, setSesion] = useState(false)

  const handleSubmit = (event: any) => {
    event.preventDefault();         
    setSesion(true);                 // Cambia SESION de false a true, para permitir mensaje.
    setTimeout(() => {
      setSesion(false);
    }, 2000);                        // El mensaje dura 2 segundos y desaparece. 
  }

  
  return (
    <App>
        <form className="formLayout" onSubmit={handleSubmit}>
            <h4 className="formTitle">Iniciar sesión:</h4>

            <label htmlFor="email">Usuario (correo electrónico):</label>
            <input type="email" name="email" /> 

            <label htmlFor="password">Contraseña:</label>
            <input type="password" name="password" /> 

            <div className="formButtonContainer">
              <button type="submit" className="btn btn-primary">ACCEDER</button>
            </div>
            {/* Como REGISTRO es true, se muestra el mensaje de confirmación */}
            {sesion && <h4 className='thanksMsg'>¡Disfruta el sitio!</h4>} 
        </form>
        <div>
            <button className="btn btn-secondary" onClick={toSignUp}>Registrarse (GRATIS)</button>
        </div>
    </App>
  )
}

export default SignIn
