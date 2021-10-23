import { useEffect, useState } from "react";

function Lista () {
  const [cargando, setCargando] = useState(true);
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPersonajes(data.results);
        setCargando(false);
      });
  }, []);

  return (
    <div>
      {cargando && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {
        personajes.map(function (personaje) {
          return <h1 key={personaje.id}>{personaje.name}</h1>;
        })
      }
    </div>
  );
}

export default Lista;
