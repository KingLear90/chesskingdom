import App from '../../App';
import './SignUp.css';
import { useState } from 'react';


function SignUp() {

  const [registro, setRegistro] = useState(false) // Variable de estado de tipo booleana para mostrar ante el registro.

  const handleSubmit = (event: any) => {
    event.preventDefault();         
    setRegistro(true);                 // Cambia registro de false a true, para permitir mensaje.
    setTimeout(() => {
      setRegistro(false);
    }, 2000);                        // El mensaje dura 2 segundos y desaparece. 
  }
  
  return (
    <App>
        <form className="formLayout" onSubmit={handleSubmit}>
            <h4 className="formTitle">¡REGISTRATE GRATIS!</h4>

            <span className='alert'>Los campos con señalados con * son obligatorios</span>

            <label htmlFor="firstName">Nombre* </label>
            <input type="text" name="firstName"/>

            <label htmlFor="lastName">Apellido</label>
            <input type="text" name="lastName"  />

            <label htmlFor="email">Correo electrónico *</label>
            <input type="email" name="email" /> 

            <label htmlFor="password">Contraseña *</label>
            <input type="password" name="password" /> 

            <div className="formButtonContainer">
              <button type="submit" className="btn btn-primary" >REGISTRAR</button>
            </div>
            {/* Como REGISTRO es true, se muestra el mensaje de confirmación */}
            {registro && <h4 className='thanksMsg'>¡Gracias por registrarte!</h4>} 
        </form>
    </App>
  )
}

export default SignUp




