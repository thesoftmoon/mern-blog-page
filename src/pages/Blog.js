import React, { Component } from 'react';
import Layout from '../layout/Layout';
import Articles from '../components/Articles';


export class Blog extends Component {

  render() {
    return (
      <Layout>
        <Articles/>
      </Layout>
    )
  }
}

export default Blog