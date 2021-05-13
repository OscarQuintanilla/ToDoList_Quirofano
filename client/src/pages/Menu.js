import React from 'react';
import { Link } from 'react-router-dom'
import HeaderBar from '../components/HeaderBar';


class Menu extends React.Component {
  render() {
    return (
      <div className="">
        <HeaderBar></HeaderBar>
        <Link to="/categories">Categorías</Link>
        <br />
        <Link to="/lists">Listas</Link>
      </div>
    )
  }

}

export default Menu;