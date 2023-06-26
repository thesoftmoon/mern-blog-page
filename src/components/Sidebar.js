import React, { Component } from 'react'
import '../css/Sidebar.scss'

export class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar-container'>
        <div className='new-article'>
            <h3>Puedes hacer esto</h3>
            <hr/>
            <a href='#' className='positive-action-btn'>Crear Artículo</a>
        </div>

        <div className='search-container'>
            <h3>Buscador</h3>
            <hr/>
            <div className="search-bar">
                <label for="exampleInputEmail1" className="form-label">Encuentra el articulo que buscas</label>
                <input type="text" className="form-control" id="exampleInputEmail1"/>
            </div>
            <a href='#' className='main-btn'>Crear Artículo</a>
        </div>
      </div>
    )
  }
}

export default Sidebar