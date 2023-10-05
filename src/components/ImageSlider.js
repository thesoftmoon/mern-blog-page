import React from 'react'

function ImageSlider() {
  return (
    <div className='image-slider-container'>
        <div className='slider-txt'>
            <h1>Hello world</h1>
            <p>morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat</p>
            <a className="main-btn" href="#">Ver más</a>
        </div>
        <img src={require(`../assets/img/test-img-mo.jpg`)} className='img-fluid d-flex d-md-none' alt='...'></img>
        <img src={require(`../assets/img/test-img-pc.jpg`)} className='img-fluid d-md-flex d-none' alt='...'></img>
    </div>
  )
}

export default ImageSlider