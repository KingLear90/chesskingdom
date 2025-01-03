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

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
      },
        body: JSON.stringify(form)
    })

    if (response.ok) {      // Pregunta para saber si la respuesta llegó bien.
      const data = await response.json();     // Si salió bien, vamos a tener una response.json y lo pasamos a una constante para poder utilizarla. 
      localStorage.setItem('token', data.token);
      console.log(data);
    } else {
      throw new Error('Alguno de los datos es inválido.');
    }
    }catch (error: string | any) {
      console.error(error.message);
    }

    setSesion(true);                 // Cambia SESION de false a true, para permitir mensaje.
    setTimeout(() => {
      setSesion(false);
    }, 2000); 
  }
  
  return (
    <App>
        <form className="formLayout" onSubmit={handleLogin}>
            <h4 className="formTitle">Iniciar sesión:</h4>

            <label htmlFor="email">Email  :</label>
            <input type="email" name="email" required 
            value={form.email} onChange={e => setForm(prevForm => ({ ...prevForm, email: e.target.value }))} />   

            <label htmlFor="password">Contraseña:</label>
            <input type="password" name="password" required 
            value={form.password} onChange={e=> setForm(prevForm => ({ ...prevForm, password: e.target.value }))} /> 

            <div className="formButtonContainer">
              <button type="submit" className="btn btn-success py-2">ACCEDER</button>
            </div>
            {/* Como REGISTRO es true, se muestra el mensaje de confirmación */}
            {sesion && <h4 className='thanksMsg'>¡Bienvenido!</h4>} 
            <div>
            <button className="btn btn-primary py-2" onClick={toSignUp}>REGISTRARSE (GRATIS)</button>
        </div>
        </form>
        
    </App>
  )
}

export default SignIn
