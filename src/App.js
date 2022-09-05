
import './App.css';
import React from 'react';
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import Nav from './component/Nav';
import Inicio from './component/Inicio'
import Proyectos from './component/Proyectos';
import Contacto from './component/Contacto';
import Conocimientos from './component/Conocimientos';
import Cargando from './component/Cargando';
function App() {
  return (
    <div className="App">
     <Router>
      <Nav/>
      <Switch>
        <Route exact path='/inicio'><Inicio/></Route>
        <Route exact path='/proyectos'><Proyectos/></Route>
        <Route exact path='/contacto'><Contacto/></Route>
        <Route exact path='/conocimientos'><Conocimientos/></Route>
        <Route exact path='/'><Cargando/></Route>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
