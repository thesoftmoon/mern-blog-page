import React from 'react';
import Layout from '../layout/Layout';
import CreateForm from '../components/CreateForm';

function CreateArticle() {
  return (
    <Layout
      moImage={require(`../assets/img/test-img-mo.jpg`)}
      pcImage={require(`../assets/img/test-img-pc.jpg`)}
      sliderSize={'small'}
      title={'Aca puedes crear un articulo'}
      text={'Añade toda la información y crea una entrada'}
    >
      <CreateForm />
    </Layout>
  )
}

export default CreateArticle