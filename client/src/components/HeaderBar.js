import React from 'react';
import './css/HeaderBar.css';

class HeaderBar extends React.Component {

  render() {
    return (
      <header className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-1 d-flex justify-content-center">
            <h1>XYZ</h1>
          </div>
        </div>
      </header>
    )
  }

}

export default HeaderBar;
