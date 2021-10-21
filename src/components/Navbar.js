import { Link } from 'react-router-dom';

function Navbar () {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">Tinto Rutas</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link to="/" className="nav-link active">Home</Link></li>
            <li><Link to="/gatito" className="nav-link">Gatito</Link></li>
            <li><Link to="/perrito" className="nav-link">Perrito</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
