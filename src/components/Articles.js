import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import Moment from 'react-moment';
import 'moment/locale/es';
import defaultImage from '../assets/default-image.jpg'

export class Articles extends Component {

    url = Global.url;

    componentDidMount(){
        this.getArticles();
    }

    state =  {
        articles: {},
        status: null
    }
    getArticles = () => {
        axios.get(this.url+"articles/")
        .then(res => {
            console.log(res.data);
            this.setState({
                articles: res.data.articles,
                status: 'success'
            })
        });
    }

  render() {

    if(this.state.articles.length >= 1){

        let listArticle = this.state.articles.map((article)=>{
            return(
                <div className='movie-container'>
                    {article.image !== null ?(
                        <img src={this.url+'get-image/'+article.image} alt={article.title}/>
                    ):(
                        <img src={defaultImage} alt={article.title}/>
                    )}
                
                <div className='txt'>
                    <h5>{article.title}</h5>
                    <p>Lorem ipsum</p>
                    <a href='/#'>Leer más</a>
                    <div>
                        <button>Marcar como favorita</button>
                    </div>
                    <hr/>
                    <p className='time'><Moment fromNow>{article.date}</Moment></p>
                </div>
            </div>
            )
        });

        return(
            <div className='container mt-5'>
                <div className="row mb-4">
                    <div className="col-12 text-center">
                        <h1>Listado de articulos</h1>
                        <p>Lorem ipsum</p>
                        <hr />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-12">
                        {listArticle}
                    </div>
                </div>
            </div>
        )
    }

    else if(this.state.articles.length === 0 && this.state.status === 'success'){
        return(
            <div className='container mt-5'>
                <div className="row mb-4">
                    <div className="col-12 text-center">
                        <h1>Listado de articulos</h1>
                        <p>Lorem ipsum</p>
                        <hr />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-12 text-center">
                        <h1>Articulos</h1>
                    </div>
                </div>
            </div>
        )
    }

    else {
        return(
            <div className='container mt-5'>
                <div className="row mb-4">
                    <div className="col-12 text-center">
                        <h1>Cargando articulos...</h1>
                        <p>Espere mientras carga la información</p>
                        <hr />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-12 text-center">
                        
                    </div>
                </div>
            </div>
        )
    }
  }
}

export default Articles