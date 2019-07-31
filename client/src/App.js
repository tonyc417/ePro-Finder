import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FrontDisplay from './components/FrontDisplay';
import Signup from './components/Signup';
import './App.css';

const App = () => {

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={FrontDisplay} />
          <Route path="/register" component={Signup} />
        </Switch>
      </div>
    </Router>
  )

};

export default App;
