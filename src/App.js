import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Portfolio from './components/Portfolio'
import './App.css';
import './responsive.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
