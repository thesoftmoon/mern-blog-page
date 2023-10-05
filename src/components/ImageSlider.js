import React from 'react'
import { Link } from 'react-router-dom'

function ImageSlider() {
  return (
    <div className='image-slider-container'>
        <div className='slider-txt'>
            <h1>Hello world</h1>
            <p className='mb-4'>morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat</p>
            <Link className='slider-btn' to={'/blog'}>Ver más</Link>
        </div>
        <img src={require(`../assets/img/test-img-mo.jpg`)} className='img-fluid d-flex d-md-none' alt='...'></img>
        <img src={require(`../assets/img/test-img-pc.jpg`)} className='img-fluid d-md-flex d-none' alt='...'></img>
    </div>
  )
}

export default ImageSlider