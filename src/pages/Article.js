import React, { Component } from 'react';
import Layout from '../layout/Layout';
import Article from '../components/Article';

export class article extends Component {
  render() {
    return (
      <Layout mainHeading='Articulo' mainText='Pagina de articulo' sectionSlider='true'>
        <Article/>
      </Layout>
    )
  }
}

export default article