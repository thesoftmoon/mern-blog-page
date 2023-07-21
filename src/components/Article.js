import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Global from "../Global";
import Moment from "react-moment";
import "moment/locale/es";
import defaultImage from "../assets/default-image.jpg";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const url = Global.url;

function Article() {
  //Here you consume the url parameter defined in reac router dom page setup
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    axios
      .get(url + "article/" + id)
      .then((res) => {
        //here you set the article data to the state
        setArticle(res.data.article);
      })
      .catch((err) => {
        setArticle(false);
      });
  }, [id]);

  const deleteArticle = (_id) => {
    Swal.fire({
      title: "¿Estas seguro de que quieres eliminar el articulo?",
      text: "No podrás revertir esta acción mas adelante",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar!",
      confirmButtonText: "Si, Eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(url + "article/" + id)
          .then((res) => {
            setArticle(res.data.article);
            setStatus("deleted");
            Swal.fire(
              "Articulo eliminado",
              "Articulo borrado correctamente",
              "success"
            );
          })
          .catch((err) => {
            console.log("Hubo un error" + err.data);
            setStatus("error");
          });
      }
    });
  };

  if (status === "deleted") {
    return <Navigate to={"/blog"} />;
  }

  if (article == null) {
    return (
      <div className="container mt-5">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h1>Cargando...</h1>
            <p>Espere que se cargue el articulo</p>
            <hr />
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }

  if (article === false) {
    return (
      <div className="container mt-5">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h1>El articulo no existe</h1>
            <p>Aun no existe contenido en esta sección</p>
            <hr />
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row mb-4">
        <div className="col-12 text-center article-container">
          {article.image !== null ? (
            <img
              className="article-img"
              src={url + "get-image/" + article.image}
              alt={article.title}
            />
          ) : (
            <img
              className="article-img"
              src={defaultImage}
              alt={article.title}
            />
          )}
          <div className="article-title">
            <h1>{article.title}</h1>
            <p>
              <Moment fromNow>{article.date}</Moment>
            </p>
          </div>

          <div className="col-10 body-text-container">
            <p>{article.content}</p>
          </div>
          <div>
            <button
              className="btn danger mx-3"
              onClick={() => {
                deleteArticle(article._id);
              }}
            >
              Eliminar
            </button>
            <button className="btn middle mx-3">Editar</button>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  );
}

export default Article;
