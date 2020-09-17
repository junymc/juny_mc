import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import './App.css';
import './responsive.css';
import DesignProjects from './components/DesignProjects';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/portfolio/design_projects">
            <DesignProjects />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
