import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Doador from './Pages/Doador';
import Login from './Components/Login/TelaLogin';
import PaginaVoluntario from './Components/Voluntário/HomeVolun';
import Cadcamp from './Components/plugins/formcad';
import Users from './Components/plugins/users'
import ONG from './Pages/ONG'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/ong' element={<ONG />} />
          <Route path='/Users' element={<Users />} />
          <Route path="/" element={<Home />} />
          <Route path="/Doador" element={<Doador />} />
          <Route path="/Login" element={<Login />} />
          <Route path='/Volun' element={<PaginaVoluntario />} />
          <Route path='/cadcamp' element={<Cadcamp />} />
        </Routes>
      </Router>
    </>
  );
}