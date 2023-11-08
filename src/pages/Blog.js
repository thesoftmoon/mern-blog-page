import React from 'react';
import Layout from '../layout/Layout';
import Articles from '../components/Articles';

function Blog(){
    return (
      <Layout
        moImage={require(`../assets/img/test-img-mo.jpg`)}
        pcImage={require(`../assets/img/test-img-pc.jpg`)}
        sliderSize={'small'}
        title={'Hello World'}
        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, repellendus.'}
      >
        <Articles />
      </Layout>
    )
  
}

export default Blog