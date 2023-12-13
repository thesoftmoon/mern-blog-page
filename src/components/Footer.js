import React, { Component } from 'react';
import '../css/Footer.scss';

const link = 'https://github.com/thesoftmoon';

export class Footer extends Component {

  render() {
    return (
      <div className='footer-container'>
        <span className='link'>MERN Blog Page | Developed By <a href={link} target='_blank' rel='noreferrer'>Tomás Pacheco</a> in React</span>
      </div>
    )
  }
}

export default Footer