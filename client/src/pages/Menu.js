import React from 'react';
import { Link } from 'react-router-dom'
import HeaderBar from '../components/HeaderBar';
import './css/Menu.css';


class Menu extends React.Component {
  render() {
    return (
      <div className="">
        <HeaderBar></HeaderBar>
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-3 d-flex justify-content-center">
              <Link to="/categories">
                <section className="btnMenu">
                  <h1>Categorías</h1>
                </section>
              </Link>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <Link to="/lists">
                <section className="btnMenu">
                  <h1>Listas</h1>
                </section>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Menu;