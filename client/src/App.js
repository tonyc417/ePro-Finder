import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FrontDisplay from './components/FrontDisplay';
import Signup from './components/Signup';
import Posts from './components/Posts';
import PostModal from './components/PostModal';
import RegisterModal from './components/auth/RegisterUser';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import { Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Container>
              <PostModal />
              {/* <RegisterModal /> */}
              <Switch>
                <Route path="/" exact component={Posts} />
                <Route path="/testing" component={FrontDisplay} />
                <Route path="/register" component={Signup} />
              </Switch>
            </Container>
          </div>
        </Router>
      </Provider>
    )

  }
};

export default App;
