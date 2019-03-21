import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthHeader from './utils/setAuthHeader';
import { setCurrentUser, logoutUser } from './store/actions/authActions';
import { clearProfile } from './store/actions/profileActions';
import store from './store/store';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Profile from './components/profile/Profile';
import './App.css';

// Check for token
if (localStorage.jwtToken) {
  setAuthHeader(localStorage.jwtToken); // set the Authorization header
  const decoded = jwt_decode(localStorage.jwtToken);  // decode token and get user info
  store.dispatch(setCurrentUser(decoded)); // setCurrentUser(decoded);

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(clearProfile());
    store.dispatch(logoutUser());
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
              <Route exact path="/profil" component={Profile} />
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
