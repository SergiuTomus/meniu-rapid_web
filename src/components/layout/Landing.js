import React, { Component } from 'react'

class Landing extends Component {
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
                <a href="/login" className="btn btn-lg btn-light">
                  Autentificare
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
