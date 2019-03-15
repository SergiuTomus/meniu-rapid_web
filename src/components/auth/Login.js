import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value }); // for all inputs
  }
  onSubmit = event => {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post('http://localhost:3005/client/login', user)
      .then(result => {
        console.log(result.data);
      })
      .catch(err => {
        this.setState({ errors: err.response.data });
      });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Autentificare</h1>
              <p className="lead text-center">
                Conecteaza-te la contul de MeniuRapid
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.email   // {is true: if value}
                    })}
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                </div>
                {/* <TextFieldGroup
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                /> */}

                {/* <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                /> */}
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                  {errors.message && (<div className="invalid-feedback d-block">{errors.message}</div>)}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />

              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;