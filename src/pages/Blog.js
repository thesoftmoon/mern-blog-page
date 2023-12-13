import React from 'react';
import Layout from '../layout/Layout';
import Articles from '../components/Articles';

function Blog(){
    return (
      <Layout
        moImage={require(`../assets/img/test-img-mo.jpg`)}
        pcImage={require(`../assets/img/test-img-pc.jpg`)}
        sliderSize={'small'}
        title={'Todos los artículos'}
        text={'Acá puedes encontrar todas las entradas a la fecha'}
      >
        <Articles />
      </Layout>
    )
  
}

export default Blog