import React, { Component } from "react";
import "../css/Navbar.scss";
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
                <a className="links" href="#">
                  Inicio
                </a>
                <a className="links" href="#">
                  Blog
                </a>
                <a className="links" href="#">
                  Formulario
                </a>
                <a className="links" href="#">
                  Pagina 1
                </a>
                <a className="links" href="#">
                  Pagina 2
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default navbar;
