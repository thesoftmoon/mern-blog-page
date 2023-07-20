import React from 'react';
import Layout from '../layout/Layout';
import CreateForm from '../components/CreateForm';

function CreateArticle() {
  return (
    <Layout mainHeading='Crear articulo' mainText='Acá puedes crear un nuevo articulo' sectionSlider='true'>
        <CreateForm/>
    </Layout>
  )
}

export default CreateArticle