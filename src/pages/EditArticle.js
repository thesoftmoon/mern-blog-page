import React from 'react';
import Layout from '../layout/Layout';
import EditForm from '../components/EditForm';

function EditArticle() {
  return (
    <Layout
      moImage={require(`../assets/img/test-img-mo.jpg`)}
      pcImage={require(`../assets/img/test-img-pc.jpg`)}
      sliderSize={'small'}
      title={'Edita un articulo'}
      text={'Modifica toda la información que necesites'}
      >
      <EditForm />
    </Layout>
  )
}

export default EditArticle