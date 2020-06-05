import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import Home from './components/Home'
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
