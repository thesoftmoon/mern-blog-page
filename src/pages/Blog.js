import React, { Component } from 'react';
import Layout from '../layout/Layout';
import Articles from '../components/Articles';


export class Blog extends Component {

  render() {
    return (
      <Layout mainHeading='Blog' mainText='Hola mundo' sectionSlider='true'>
        <Articles/>
      </Layout>
    )
  }
}

export default Blog