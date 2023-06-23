import React, { Component } from 'react'
import '../css/Slider.scss'

export class Slider extends Component {
    render() {
        let mainHeading = 'Neque porro quisquam est qui dolorem ';
      let mainText = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit';

    return (
      <div className='slider-container'>
        <div className='row'>
            <div className='col-12 txt-container'>
                <h1>{mainHeading}</h1>
                <p>{mainText}</p>
                <a href='#' className='main-btn'>call to action</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Slider