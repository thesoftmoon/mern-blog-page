import React, { Component } from "react";
import "../css/Navbar.scss";
import { Link } from "react-router-dom";
export class navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-between">
              <div className="logo">
                <img
                  src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
                  width={70}
                />
              </div>
              <div className="nav-items">
                <Link to='/' className="links">Inicio</Link>
                <Link to='/test' className="links">Blog</Link>
                <Link to='/formulario' className="links">Formulario</Link>
                <Link to='/' className="links">Pagina 1</Link>
                <Link to='/' className="links">Pagina 2</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default navbar;
