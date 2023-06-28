import React, {Component} from 'react'

export class Pelicula extends Component {
    mark = () => {
        this.props.likeMovie(this.props.pelicula);
    }
    render(){
        const {title, description, image} = this.props.pelicula;
        return(
            <div className='movie-container'>
                <img src={image} alt={title}/>
                <div className='txt'>
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <a href='/#'>Leer más</a>
                    <div>
                        <button onClick={this.mark}>Marcar como favorita</button>
                    </div>
                    <hr/>
                    <p className='time'>Hace 5 minutos</p>
                </div>
            </div>
        )
    }
}

export default Pelicula