import React, { Component } from "react";
import Layout from "../layout/Layout";

export class Form extends Component {
  nameRef = React.createRef();
  surnameRef = React.createRef();
  emailRef = React.createRef();
  generoHombreRef = React.createRef();
  generoMujerRef = React.createRef();
  generoOtroRef = React.createRef();

  state = {
    user: {},
  };

  receiveForm = (e) => {
    e.preventDefault();

    let genero = "mujer";

    if (this.generoHombreRef.current.checked) {
      genero = this.generoHombreRef.current.value;
    } else if (this.generoMujerRef.current.checked) {
      genero = this.generoMujerRef.current.value;
    } else {
      genero = this.generoOtroRef.current.value;
    }

    let user = {
      nombre: this.nameRef.current.value,
      apellido: this.surnameRef.current.value,
      email: this.emailRef.current.value,
      genero: genero,
    };
    console.log("Formulario enviado");
    console.log(user);
  };
  render() {
    return (
      <Layout mainHeading="pagina formulario" mainText="Completa o prueba el formulario" sectionSlider='true'>
        <div className="container mt-5">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h1>Formulario</h1>
              <p>Lorem ipsum</p>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <form onSubmit={this.receiveForm}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    ref={this.nameRef}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="surname" className="form-label">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="surname"
                    ref={this.surnameRef}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Dirección correo
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    aria-describedby="emailHelp"
                    ref={this.emailRef}
                  />
                  <div id="emailHelp" className="form-text">
                    Nunca compartas tu correo electronico con nadie más
                  </div>
                </div>

                <div className="form-check form-check-inline mb-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="genero"
                    value="mujer"
                    ref={this.generoMujerRef}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Mujer
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="genero"
                    value="hombre"
                    ref={this.generoHombreRef}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Hombre
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="genero"
                    value="otro"
                    ref={this.generoOtroRef}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio3">
                    Otro
                  </label>
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="clearfix"></div>
        </div>
      </Layout>
    );
  }
}

export default Form;
