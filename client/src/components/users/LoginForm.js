import React from 'react';
import "./css/LoginForm.css";

import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
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
            <form className="col-10 col-sm-8 col-md-5">
              <div className="form-group">
                <label for="">Usuario</label>
                <input type="text" id="txtUser" className="form-control" placeholder="Usuario..." />
              </div>
              <div className="form-group">
                <label for="">Contraseña</label>
                <input type="password" id="txtPassword" className="form-control" placeholder="Contraseña..." />
              </div>
              <div className="form-group">
                <button className="btn btn-primary btnLogin">Entrar</button>
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