import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
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
        </Switch>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
