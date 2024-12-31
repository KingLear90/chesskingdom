import './SignIn.css';
import App from '../../App';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SignIn() {
  const [sesion, setSesion] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate(); 

  const toSignUp = () => {
   navigate('/signup')
  }

  fetch("http://localhost:3000/api/user/get")
  .then(res => res.json())
  .then(data => console.log(data)) 

 

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
            <input type="email" name="email" required 
            value={form.email} onChange={e => setForm(prevForm => ({ ...prevForm, email: e.target.value }))} />   

            <label htmlFor="password">Contraseña:</label>
            <input type="password" name="password" required 
            value={form.password} onChange={e=> setForm(prevForm => ({ ...prevForm, password: e.target.value }))} /> 

            <div className="formButtonContainer">
              <button type="submit" className="btn btn-success py-2">ACCEDER</button>
            </div>
            {/* Como REGISTRO es true, se muestra el mensaje de confirmación */}
            {sesion && <h4 className='thanksMsg'>¡Disfruta el sitio!</h4>} 
            <div>
            <button className="btn btn-primary py-2" onClick={toSignUp}>REGISTRARSE (GRATIS)</button>
        </div>
        </form>
        
    </App>
  )
}

export default SignIn
