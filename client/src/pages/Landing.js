import React from 'react';

import HeaderBar from '../components/HeaderBar';
import LoginForm from '../components/users/LoginForm';

class Landing extends React.Component {
  state = {
    form: {
      user: '',
      name: '',
      password: '',
      job: ''
    },
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <HeaderBar />
        <LoginForm
          onChange={this.handleChange}
          formValues={this.state.form} />
      </div>
    )
  }
}

export default Landing;