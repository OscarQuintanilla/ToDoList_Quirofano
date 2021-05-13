import React from 'react';

import HeaderBar from '../components/HeaderBar';
import CategoryTable from '../components/category/categoryTable';

class Category extends React.Component {

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
        <CategoryTable
          user={this.state.user.user}
          listValues={this.state.categoryList}
          onChange={this.handleChange}
          Z />
      </div>
    )
  }
}

export default Category;