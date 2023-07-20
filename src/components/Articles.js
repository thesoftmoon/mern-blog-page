import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import Moment from 'react-moment';
import 'moment/locale/es';
import defaultImage from '../assets/default-image.jpg';
import { Link } from 'react-router-dom';

export class Articles extends Component {

    url = Global.url;

    state =  {
        articles: {},
        status: null
    }

    componentDidMount(){
        let home = this.props.home;
        let search = this.props.search;

        if(home === 'true'){
            this.getLastArticles();
        }else if(search && search !== null && search !== undefined){
            this.getArticlesBySearch(search);
        }
        
        else {
            this.getArticles();
        }
    }

    getArticlesBySearch = (searched) => {
        axios.get(this.url+"search/"+searched)
        .then(res => {
            if(res.data.articles){
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
            }else {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
            }
        })
        .catch(error =>{
            this.setState({
                articles: [],
                status: 'success'
            });
        });
    }

    
    getArticles = () => {
        axios.get(this.url+"articles/")
        .then(res => {
            this.setState({
                articles: res.data.articles,
                status: 'success'
            })
        });
    }

    getLastArticles = () => {
        axios.get(this.url+"articles/last")
        .then(res => {
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
                <div key={article._id} className='movie-container'>
                    {article.image !== null ?(
                        <img src={this.url+'get-image/'+article.image} alt={article.title}/>
                    ):(
                        <img src={defaultImage} alt={article.title}/>
                    )}
                
                <div className='txt'>
                    <h5>{article.title}</h5>
                    <p>Lorem ipsum</p>
                    <Link to={'/blog/articulo/'+article._id}>Leer Más</Link>
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
                        <h1>{this.props.lastArticles === 'true' ? 'Últimos artículos' : 'Articulos'}</h1>
                        <p>{this.props.lastArticles === 'true' ? 'Encuentra los artículos mas actuales' : 'Revisa todos los artículos a la fecha'}</p>
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
                        <h1>No hay articulos para mostrar</h1>
                        <p>Aun no existe contenido en esta sección</p>
                        <hr />
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