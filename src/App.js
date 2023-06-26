import './App.scss';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <Sidebar/>
      <div className='row mt-5'>
        <div className='col-12 text-center'>
          <h1>Hello world</h1>
          <p className='mb-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a href='#' className='main-btn mt-4'>Crear Artículo</a>
        </div>
      </div>
      <div className='clearfix'></div>
      <Footer/>
    </div>
  );
}

export default App;
