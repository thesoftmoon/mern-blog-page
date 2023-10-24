import React, { Component } from 'react';
import Layout from '../layout/Layout';
import Article from '../components/Article';

export class article extends Component {
  render() {
    return (
      <Layout
        moImage={require(`../assets/img/test-img-mo.jpg`)}
        pcImage={require(`../assets/img/test-img-pc.jpg`)}
        sliderSize={'small'}
        title={'Hello World'}
        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, repellendus.'}>
        <Article />
      </Layout>
    )
  }
}

export default article