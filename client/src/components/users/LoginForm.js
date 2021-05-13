import React from 'react';
import axios from 'axios';
import "./css/LoginForm.css";

import { Link } from 'react-router-dom';

class LoginForm extends React.Component {

  handleClick = e => {
    axios.post('/api/user/login',
      {
        user: this.props.formValues.user,
        password: this.props.formValues.password
      })
      .then((response) => {
        if (response.data == null) {
          console.log("usuario incorrecto");
        } else {
          sessionStorage.setItem('user', JSON.stringify({
            user: response.data.user,
            name: response.data.name,
            job: response.data.job,
            id: response.data._id
          }));
          console.log(sessionStorage.getItem('user'));
          window.location.href = "/menu";
        }
      }, (error) => {
        console.log(error.data.status);
        console.log("Usuario Incorrecto");
      });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };


  render() {
    return (
      <section >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-10 col-sm-8 col-md-5">
              <h2>Inicia Sesión</h2>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <form className="col-10 col-sm-8 col-md-5" onSubmit={this.handleSubmit} >
              <div className="form-group">
                <label htmlFor="txtUser">Usuario</label>
                <input
                  value={this.props.formValues.user}
                  onChange={this.props.onChange}
                  name="user"
                  type="text"
                  id="txtUser"
                  className="form-control"
                  placeholder="Usuario..." />
              </div>
              <div className="form-group">
                <label htmlFor="txtPassword">Contraseña</label>
                <input
                  value={this.props.formValues.password}
                  onChange={this.props.onChange}
                  name="password"
                  type="password"
                  id="txtPassword"
                  className="form-control"
                  placeholder="Contraseña..." />
              </div>
              <div className="form-group">
                <button className="btn btn-primary btnLogin" onClick={this.handleClick}>Entrar</button>
              </div>
            </form>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-10 col-sm-8 col-md-5">
              <p>O puedes crear un nuevo usuario. <Link to="/SignUp">Haz click aquí.</Link> </p>
            </div>

          </div>
        </div>
      </section>
    )
  }
}

export default LoginForm;