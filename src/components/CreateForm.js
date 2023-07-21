import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Global from "../Global";
import { Navigate } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import Swal from "sweetalert2";



function CreateForm() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const [status, setStatus] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [article, setArticle] = useState();


  
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
    console.log(formData);
  };


  //here useEffect watch for changes in article state
  useEffect(() => {
    if (status === "waiting" && article && selectedFile !== null) {
      //here we catch the article _id from the first POST from axios
      let articleId = article._id;
      //create a new form for the image
      const formDataImage = new FormData();
      //append the file to the state
      formDataImage.append("file0", selectedFile, selectedFile.name);
      // now we make the second POST to upload the image and change the status to success
      const url = Global.url;
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
          .post(url + "save/", formData)
          .then((res) => {
            if (res.data.article) {
              console.log("Datos guardados con éxito:", res.data);
              setArticle(res.data.article);
              setStatus("waiting");
              Swal.fire(
                'Articulo creado',
                'Articulo guardado correctamente',
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
              <input
                className="form-control"
                type="file"
                id="formFile"
                name="file0"
                value={formData.file0}
                onChange={fileChange}
              />
            </div>

            <div className="mb-3">
              <button type="submit" className="btn btn-primary">
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

export default CreateForm;
