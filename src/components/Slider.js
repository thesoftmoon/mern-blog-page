import React, { Component } from 'react'
import '../css/Slider.scss'

export class Slider extends Component {
    render() {
    return (
      <div className='slider-container'>
        <div className='row'>
            <div className='col-12 txt-container'>
                <h1>{this.props.mainHeading}</h1>
                <p>{this.props.mainText}</p>
                <a href='#' className='main-btn'>call to action</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Slider