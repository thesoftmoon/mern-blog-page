import React from 'react';
import Layout from '../layout/Layout';
import EditForm from '../components/EditForm';

function EditArticle() {
  return (
    <Layout mainHeading='Edita el articulo' mainText='Acá puedes editar el articulo' sectionSlider='true'>
        <EditForm/>
    </Layout>
    )
}

export default EditArticle