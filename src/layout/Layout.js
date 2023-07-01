import React from 'react'
import Slider from '../components/Slider';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Layout({children}) {
  return (
    <div>
        <Navbar/>
      <Slider
        mainHeading={'Neque porro quisquam est qui dolorem '}
        mainText={'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'} 
      />
      <Sidebar/>
      <div>{children}</div>
      <div className='clearfix'></div>
      <Footer/>
    </div>
  )
}

export default Layout