// import logo from './logo.svg';
import './App.css';
import Cabecera from './Cabecera';
import Filados from './Filados';
import Filauno from './Filauno';
import Testimonial from './Testimonial';
import Footer from './Footer'

import People from './People';





function App() {
  return (
    <div className="App">
      <header>
    
       <Cabecera />
     
   
      </header>
      
      <Filauno />
      <Filados />
      <Testimonial />
      <People />
      <footer>
        <Footer />
      </footer>
      
      
    </div>
  );
}

export default App;
