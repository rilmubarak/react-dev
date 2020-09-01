import React from 'react';
import About from './pages/About';
import Navbar from './components/Navbar';
import DigimonPage from './pages/DigimonPage';
import DetailPage from './pages/DetailPage';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>  
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/About" component={About}/>
          <Route exact path="/" component={DigimonPage}/>
          <Route path="/detail/:name" component={DetailPage}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
