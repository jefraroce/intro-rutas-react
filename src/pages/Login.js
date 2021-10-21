import { useState } from "react";

function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Hola soy el formulario', email, password);

    if ( email === 'tinto@tinto.co' && password === '123456' ) {
      alert('Te has logueado!');
      // Crear un registro en el localStorage { session: false }
    } else {
      alert('El correo o contraseña no coinciden.');
    }
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  return (
    <div className="card mx-auto" style={{ width: '100%', maxWidth: '500px' }}>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={handleEmail} />
            <div id="emailHelp" className="form-text">Nosotros no compartimos tu correo con nadie más.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="password" value={password} onChange={handlePassword} />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
