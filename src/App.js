import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Gatito from './components/Gatito';
import Perrito from './components/Perrito';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Lista from './components/Lista';
import '@popperjs/core';
import 'bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container-fluid">

        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route exact path="/gatito">
            <Gatito />
          </Route>

          <Route exact path="/perrito">
            <Perrito />
          </Route>

          <Route exact path="/lista">
            <Lista />
          </Route>

          <Route>
            <h1>Página NO Encontrada</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
