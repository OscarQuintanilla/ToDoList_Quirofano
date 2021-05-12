import React from 'react';

import HeaderBar from '../components/HeaderBar';
import SignUpForm from '../components/users/SignUpForm';

class SignUp extends React.Component {
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
        <HeaderBar></HeaderBar>
        <SignUpForm
          onChange={this.handleChange}
          formValues={this.state.form}
        />
      </div>
    );
  };
};

export default SignUp;