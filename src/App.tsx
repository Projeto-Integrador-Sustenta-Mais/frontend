import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';
import Contato from './pages/contato/Contato';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='min-h-[80vh]'>     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/contato" element={<Contato/>} />
        </Routes>
      </div> 
      <Footer />

    </BrowserRouter>
  )
}

export default App
