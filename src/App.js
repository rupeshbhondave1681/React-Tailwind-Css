import logo from './logo.svg';
import './App.css';
import image from './monkey_image.jpg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Filters from './Pages/Filters/Filters';
import Interactivity from './Pages/Interactivity/Interactivity';
function App() {
  return (

 

      

      <Router>
            <ul className='bg-black text-white flex'>
      <li className='mx-2 hover:bg-white hover:text-black'> Home</li>
      <li className='mx-2'> About</li>
      <li className='mx-2'> Contact</li>
      <li className='mx-2'> Gallary</li>
     </ul>
      <div>
        <Routes>
          <Route path="/filters" element={<Filters />} />
          <Route path="/" element={<Interactivity/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
