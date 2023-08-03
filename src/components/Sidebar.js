import React, { Component } from 'react'
import '../css/Sidebar.scss'
import { Navigate, Link } from 'react-router-dom';

export class Sidebar extends Component {

  searchRef = React.createRef();

  state = {
    search: '',
    redirect: false,
  }

  redirectToSearch = (e) => {
    e.preventDefault();
    this.setState({
      search: this.searchRef.current.value,
      redirect: true,
    });

  }
  render() {
    if(this.state.redirect){
      return(
        <Navigate replace to={'/blog/redirect/'+this.state.search}/>
      );
    }
    return (
      <div className='sidebar-container d-none d-md-block'>
        <div className='new-article'>
            <h3>Puedes hacer esto</h3>
            <hr/>
            <Link replace to={'/blog/crear'} className='positive-action-btn'>Crear Artículo</Link>
        </div>

        <div className='search-container'>
            <h3>Buscador</h3>
            <hr/>
            <form onSubmit={this.redirectToSearch} className="search-bar">
                <label htmlFor="exampleInputEmail1" className="form-label">Encuentra el articulo que buscas</label>
                <input type="text" className="form-control" id="exampleInputEmail1" ref={this.searchRef}/>
                <button type="submit" className='main-btn mt-4'>Buscar articulos</button>
            </form>
        </div>
      </div>
    )
  }
}

export default Sidebar