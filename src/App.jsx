import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Reservations from './pages/Reservations'
import About from './components/About'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path="/reservations" element={<Reservations/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
