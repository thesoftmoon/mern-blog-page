import React, {Component} from 'react'
import Pelicula from './Pelicula'

export class Peliculas extends Component {
    state = {
        peliculas:[{title: 'Interstellar', 
                    image: 'https://www.hollywoodreporter.com/wp-content/uploads/2014/09/interstellar_poster_0.jpg', 
                    description: 'Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de garantizar la supervivencia de la humanidad.'
                    },
                    {title: 'Prometheus', 
                    image: 'https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2017/05/prometheus.jpg', 
                    description: 'Siguiendo las pistas del origen de la humanidad, un equipo encuentra una estructura en una luna distante, pero pronto se dan cuenta de que no están solos.'
                    },
                    {title: 'Elysium', 
                    image: 'https://scriptshadow.net/wp-content/uploads/2013/08/elysium-teaser_77-930x384.jpg', 
                    description: 'En el año 2154, los muy ricos viven en una estación espacial artificial, mientras que el resto de la población reside en una Tierra en ruinas. Un hombre asume una misión que podría traer igualdad a los mundos polarizados.'
                    },
                ],
        nombre: 'Tomás Pacheco',
        favorita: null
    }

    likeMovie = (pelicula) => {
        console.log('fav movie work')
        console.log(pelicula.title)
        this.setState({favorita: pelicula.title})
    }

    componen
    render(){
        return(
            <div className='container movies-container'>
                <div className='row mb-4'>
                    <div className='col-12 text-center'>
                        <h1>Peliculas</h1>
                        <p>Lorem ipsum</p>
                        {this.state.favorita ?
                            (<p className='fav-movie'>La pelicula favorita es <strong>{this.state.favorita}</strong></p>) : (<p>No hay pelicula favorita</p>)
                        }
                        <hr/>
                    </div>
                </div>
                
                {
                this.state.peliculas.map((pelicula, index) =>{
                    return (

                        <Pelicula
                            key={index}
                            pelicula={pelicula}
                            likeMovie={this.likeMovie}
                        />
                    )
                })
            }
            </div>
        )
    }
}

export default Peliculas