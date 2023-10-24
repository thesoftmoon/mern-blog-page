import React from 'react'
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';

function Layout(props) {
  return (
    <div>
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
      <Sidebar />
      <div>{props.children}</div>
      <div className='clearfix'></div>
      <Footer />
    </div>
  )
}

export default Layout