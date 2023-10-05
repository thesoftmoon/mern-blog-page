import React from 'react'
import Slider from '../components/Slider';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';

function Layout(props) {
  return (
    <div>
        <Navbar/>
        <ImageSlider/>
        <Slider
          mainHeading={props.mainHeading}
          mainText={props.mainText} 
          activeBtn={props.activeBtn}
          sectionSlider={props.sectionSlider}
        />
      <Sidebar/>
      <div>{props.children}</div>
      <div className='clearfix'></div>
      <Footer/>
    </div>
  )
}

export default Layout