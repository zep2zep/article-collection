import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Cartelle from './components/Cartelle';
import Insertjstips from './components/Insertjstips';
/* import ToggleColorMod from './components/Muinsert'; */
import Insetnewtips from './components/Insertnewtips';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components/about" element={<About />} />
        <Route path="/components/cartelle" element={<Cartelle />} />
        <Route path="/components/insertnewtips" element={<Insetnewtips />} />
        <Route path="/components/insertjstips" element={<Insertjstips />} />
        <Route path="/components/login" element={<Login />} />
        <Route path="/components/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
