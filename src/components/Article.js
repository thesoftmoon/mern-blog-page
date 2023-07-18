import React, { Component } from 'react';

export class Article extends Component {
  render() {
    return (
        <div className='container mt-5'>
            <div className="row mb-4">
                <div className="col-12 text-center">
                    <h1>No hay articulos para mostrar</h1>
                    <p>Aun no existe contenido en esta sección</p>
                    <hr />
                </div>
            </div>
        </div>
    )
  }
}

export default Article