import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.authenticated) {
      this.props.history.push('/comenzi');          // if auth and writing '/' in URL
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Meniu Rapid</h1>
                <p className="lead">
                  Pentru gestionarea comenzilor si administrarea meniurilor in restaurante
                </p>
                <hr />
                <Link to="/login" className="btn btn-lg btn-light">
                  Autentificare
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
