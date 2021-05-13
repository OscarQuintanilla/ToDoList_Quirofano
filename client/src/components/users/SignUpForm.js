import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SingUpForm extends React.Component {
  componentDidMount() {
    axios.get('/api/user/getAll').then((response) => {
      console.log(response.data.userList);
    }).catch(console.log);

  }

  handleClick = e => {
    console.log(this.props.formValues);
    axios.post('/api/user/insert',
      {
        user: this.props.formValues.user,
        name: this.props.formValues.name,
        job: this.props.formValues.job,
        password: this.props.formValues.password
      })
      .then((response) => {
        console.log(response.data.status);
        window.location.href = "/";
      }, (error) => {
        console.log(error.data.status);
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
              <h2>Registrarse</h2>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <form className="col-10 col-sm-8 col-md-5" onSubmit={this.handleSubmit} >
              <div className="form-group">
                <label htmlFor="txtUser">Usuario</label>
                <input
                  onChange={this.props.onChange}
                  type="text"
                  id="txtUser"
                  className="form-control"
                  placeholder="Usuario..."
                  name="user"
                  value={this.props.formValues.user} />
              </div>
              <div className="form-group">
                <label htmlFor="txtName">Nombre Completo</label>
                <input
                  onChange={this.props.onChange}
                  type="text"
                  id="txtName"
                  className="form-control"
                  placeholder="Usuario..."
                  name="name"
                  value={this.props.formValues.name} />
              </div>
              <div className="form-group">
                <label htmlFor="txtJob">Puesto</label>
                <input
                  onChange={this.props.onChange}
                  type="text"
                  id="txtJob"
                  className="form-control"
                  placeholder="Usuario..."
                  name="job"
                  value={this.props.formValues.job} />
              </div>
              <div className="form-group">
                <label htmlFor="txtPassword">Contraseña</label>
                <input
                  onChange={this.props.onChange}
                  type="password"
                  id="txtPassword"
                  className="form-control"
                  placeholder="Contraseña..."
                  name="password"
                  value={this.props.formValues.password} />
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
    );
  }
}

export default SingUpForm;