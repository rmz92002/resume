import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Film from './pages/Film';
import Future from './pages/Future';
import Hobbies from './pages/Hobbies';
import Home from './pages/Home';
import Work from './pages/Work';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/film' element={<Film />} />
        <Route path='/work' element={<Work />} />
        <Route path='/hobbies' element={<Hobbies />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
