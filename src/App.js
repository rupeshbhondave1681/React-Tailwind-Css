import logo from './logo.svg';
import './App.css';
import image from './monkey_image.jpg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Filters from './Pages/Filters/Filters';
import Interactivity from './Pages/Interactivity/Interactivity';
import ComponentButtons from './Component/ComponentButtons/ComponentButtons';
import MediaQueryBreakPoints from './Pages/MediaQueryBreakPoints/MediaQueryBreakPoints';
import Column from './Pages/Column/Column';
import Flex from './Pages/Flex/Flex';
import Grid from './Pages/Grid/Grid';
function App() {
  return (
      <Router>
      <div>
        <Routes>
        <Route path="/" element={<ComponentButtons/>}/>
          <Route path="/filters" element={<Filters />} />
          <Route path="/interactivity" element={<Interactivity/>}/>
          <Route path="/mediaQueryBreakPoints" element={<MediaQueryBreakPoints/>}/>
          <Route path="/column" element={<Column/>}/>
          <Route path="/flex" element={<Flex/>}/>
          <Route path="/grid" element={<Grid/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
