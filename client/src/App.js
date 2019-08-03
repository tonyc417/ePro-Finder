import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FrontDisplay from './components/FrontDisplay';
import Signup from './components/Signup';
import Posts from './components/Posts';
import PostModal from './components/PostModal';

import { Provider } from 'react-redux';
import store from './store';

import { Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Container>
          <PostModal />
          <Switch>
            <Route path="/" exact component={FrontDisplay} />
            <Route path="/allpost" component={Posts} />
            <Route path="/register" component={Signup} />
          </Switch>
          </Container>
        </div>
      </Router>
    </Provider>
  )

};

export default App;
