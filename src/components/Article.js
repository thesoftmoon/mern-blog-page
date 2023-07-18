import React, { Component } from "react";

export class Article extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row mb-4">
          <div className="col-12 text-center article-container">
            <img
              className="article-img"
              src="https://scriptshadow.net/wp-content/uploads/2013/08/elysium-teaser_77-930x384.jpg"
              alt="pelicula"
            />

            <div className="article-title">
              <h1>Titulo del articulo</h1>
              <p>Hace 5 minutos</p>
            </div>

            <div className="col-10 body-text-container">
              <p>
                Lorem ipsum dolor sit amet. Aut repellendus dolorem et
                consequatur possimus ab incidunt debitis! Et possimus vero At
                totam deserunt est omnis nihil sit illum velit non culpa
                corporis? Ut odit iste ea cupiditate iure est eius quod aut enim
                nulla At velit cupiditate ut odit ipsam quo esse modi! Qui
                adipisci internos aut minima praesentium qui soluta tempore hic
                itaque earum aut nulla quod sed expedita delectus et esse
                cumque? Et atque harum et quia placeat et vitae inventore non
                animi rerum At dolor galisum vel natus eius et autem assumenda.
                In fugiat deserunt aut alias quibusdam in illum voluptatum. Et
                itaque consequatur ut libero veritatis non consequatur dicta aut
                illo sapiente. Et labore optio ut natus enim nam internos
                consequatur id eius perferendis.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
