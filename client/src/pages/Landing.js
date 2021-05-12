import React from 'react';

import HeaderBar from '../components/HeaderBar';
import LoginForm from '../components/users/LoginForm';

class Landing extends React.Component {
  render() {
    return (
      <div>
        <HeaderBar></HeaderBar>
        <LoginForm></LoginForm>
      </div>
    )
  }
}

export default Landing;