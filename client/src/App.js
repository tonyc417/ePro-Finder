import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FrontDisplay from './components/FrontDisplay';
import Signup from './components/Signup';
import Posts from './components/Posts';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={FrontDisplay} />
          <Route path="/allpost" component={Posts} />
          <Route path="/register" component={Signup} />
        </Switch>
      </div>
    </Router>
  )

};

export default App;
