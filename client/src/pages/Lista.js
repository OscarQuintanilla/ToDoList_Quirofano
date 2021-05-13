import React from 'react';

import HeaderBar from '../components/HeaderBar';
import ListTable from '../components/List/ListTable';

class Lista extends React.Component {

  state = {
    user: {},
    categoryList: { "": "" },
    form: {
      user: '',
      nameCategory: '',
    },
  }

  componentDidMount() {
    this.setState({
      user: JSON.parse(sessionStorage.getItem('user')),
    });
  }

  render() {
    return (
      <div>
        <HeaderBar />
        <ListTable
          user={this.state.user.user}
          listValues={this.state.categoryList}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default Lista;