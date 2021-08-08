import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'; 
import "@fontsource/roboto"; 
import "@fontsource/pacifico";

import Login from './views/Login/Login';
import ListaUsuarios from './views/Usuarios/ListaUsuarios'
import Usuario from './views/Usuarios/Usuario'

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Login} />
      <Route path='/login' component={Login} />
      <Route path='/usuarios' component={ListaUsuarios} />
      <Route path='/usuario/:id' component={Usuario} />
    </BrowserRouter>
  );
}

export default App;
