import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Doador from './Pages/Doador';
import Login from './Components/Login/TelaLogin';
import PaginaVoluntario from './Components/Voluntário/HomeVolun';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Doador" element={<Doador />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path='/Volun' element={<PaginaVoluntario />}/>
        </Routes>
      </Router>
    </>
  );
}