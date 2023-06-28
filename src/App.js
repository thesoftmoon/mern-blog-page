import './App.scss';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Peliculas from './components/Peliculas';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider
        mainHeading={'Neque porro quisquam est qui dolorem '}
        mainText={'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'} 
      />
      <Sidebar/>
      <Peliculas/>
      <div className='clearfix'></div>
      <Footer/>
    </div>
  );
}

export default App;
