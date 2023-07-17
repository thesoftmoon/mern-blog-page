import React, { Component } from 'react'
import '../css/Slider.scss';
import { Link } from 'react-router-dom';

export class Slider extends Component {
    render() {
    return (
      <div className={this.props.sectionSlider === 'true' ? 'slider-container-small' : 'slider-container'}>
        <div className='row'>
            <div className='col-12 txt-container'>
                <h1>{this.props.mainHeading}</h1>
                <p>{this.props.mainText}</p>
                { this.props.activeBtn === 'true' ?
                <Link className='main-btn' to={'/blog'}>Ver más</Link> : '' }
            </div>
        </div>
      </div>
    )
  }
}

export default Slider