import React from 'react';
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import HomePage from './pages/Home';
import ErrorPage from './pages/Error';
import FormPage from './pages/Form';
import BlogPage from './pages/Blog';
import SearchPage from './pages/Search';
import ArticlePage from './pages/Article';
import CreateArticlePage from './pages/CreateArticle';
import EditArticlePage from './pages/EditArticle';

export default function App() {
    function GetParamsRedirect(){

        let params = useParams();

        return (<Navigate to={'/blog/search/'+params.search} />)

    };
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/search/:search" element={<SearchPage />} />
        <Route path="/blog/redirect/:search" element={<GetParamsRedirect/>} />
        <Route path="/blog/crear" element={<CreateArticlePage/>} />
        <Route path="/blog/editar/:id" element={<EditArticlePage/>} />
        <Route path="/formulario" element={<FormPage />} />
        <Route path="/blog/articulo/:id" element={<ArticlePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
  )
}
