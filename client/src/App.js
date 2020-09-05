import React from 'react';
import About from './pages/About';
import Navbar from './components/Navbar';
import DigimonPage from './pages/DigimonPage';
import DetailPage from './pages/DetailPage';
import Favorite from './pages/Favorite';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>  
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/About" component={About}/>
            <Route exact path="/" component={DigimonPage}/>
            <Route path="/detail/:name" component={DetailPage}/>
            <Route path="/favorite" component={Favorite}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
