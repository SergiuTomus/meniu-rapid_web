import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthHeader from './utils/setAuthHeader';
import { setCurrentUser, logoutUser } from './store/actions/authActions';
import store from './store/store';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import './App.css';

// Check for token
if (localStorage.jwtToken) {
  // set the Authorization header
  setAuthHeader(localStorage.jwtToken);
  // decode token and get user info
  const decoded = jwt_decode(localStorage.jwtToken);
  // setCurrentUser(decoded);
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser()); // logout user
    window.location.href = '/login'; // redirect
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/login" component={Login} />
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
