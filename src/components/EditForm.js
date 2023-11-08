import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Global from "../Global";
import { Navigate, useParams } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import Swal from "sweetalert2";
import defaultImage from '../assets/default-image.jpg';




function EditForm() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const [status, setStatus] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [article, setArticle] = useState();

  const url = Global.url;
  const { id } = useParams();

  const validator = useRef(new SimpleReactValidator({
    messages: {
      required: 'Debes rellenar este campo antes de enviar',
      alpha_num_space: 'Debe contener solo letras, numeros y espacios',
    },
  }));

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getArticle = (id) =>{
    axios.get(url + 'article/' + id)
        .then((res)=>{
            setArticle(res.data.article);
            setFormData(res.data.article);
            console.log('articulo recuperado');
        })
        .catch((err)=>{
            console.log('Ocurrio un error: ' + err.data )
        })
    }

    useEffect(()=>{
        getArticle(id)
    }, []);


  useEffect(() => {
    if (status === "waiting" && article && selectedFile !== null) {
      let articleId = article._id;
      const formDataImage = new FormData();
      formDataImage.append("file0", selectedFile, selectedFile.name);
      axios
        .post(url + "upload-image/" + articleId, formDataImage)
        .then((res) => {
          if (res.data.article) {
            console.log("Imagen subida con éxito:", res.data);
            setArticle(res.data.article);
            setStatus("success");
          }
        })
        .catch((err) => {
          console.error("Error al subir imagen:", err);
          setStatus("error");
        });
    }
    
  }, [status, article, selectedFile]);

  const handleSubmit = (e) => {
    e.preventDefault();

      if(validator.current.allValid()){

        const url = Global.url;
    
        axios
          .put(url + "article/" + id, formData)
          .then((res) => {
            if (res.data.article) {
              console.log("Datos guardados con éxito:", res.data);
              setArticle(res.data.article);
              setStatus("waiting");
              Swal.fire(
                'Articulo Editado',
                'Articulo modificado correctamente',
                'success'
              )
    
              if (selectedFile !== null) {
              } else {
                setStatus("success");
              }
            }
          })
          .catch((err) => {
            console.error("Error al guardar los datos:", err);
            setStatus("error");
          });
      } else {
        validator.current.showMessages();
        setStatus('error');
      }
    
    
  };


  const fileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log(selectedFile);
  };

  if (status === "success") {
    return <Navigate to={"/blog"} />;
  }

  if (article === undefined) {
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

  return (
        <div className="container mt-5">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h1>Crear nuevo articulo</h1>
              <hr />
            </div>
          </div>
    
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                  <label htmlFor="floatingInput">Titulo del articulo</label>
                  {validator.current.message('title', formData.title, 'required|alpha_num_space')}
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: 100 }}
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                  ></textarea>
                  <label htmlFor="floatingTextarea2">Contenido del articulo</label>
                  {validator.current.message('content', formData.content, 'required')}
    
                </div>
                <div className="mb-3">
                <p>Imagen actual</p>
                {article.image !== null ?(
                        <img src={url+'get-image/'+article.image} alt={article.title} width={150}/>
                    ):(
                        <img src={defaultImage} alt={article.title} width={150}/>
                    )}
                </div>
    
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    name="file0"
                    value={formData.file0}
                    onChange={fileChange}
                  />
                </div>
    
                <div className="mb-3 d-flex justify-content-center">
                  <button type="submit" className="primary-btn">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
    
          <div className="clearfix"></div>
        </div>
    
  );
}

export default EditForm;
