import React from 'react'
import Slider from '../components/Slider';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Layout(props) {
  return (
    <div>
        <Navbar/>
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