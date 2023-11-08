import React from 'react'
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';

function Layout(props) {
  return (
    <div className='main-app'>
      <Navbar />
      <ImageSlider
        moImage={props.moImage}
        pcImage={props.pcImage}
        sliderSize={props.sliderSize}
        title={props.title}
        text={props.text}
        btn={props.btn}
        btnLink={props.btnLink}
      />
      {/* <Sidebar /> */}
      <div className='mb-5'>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout