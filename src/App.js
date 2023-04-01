// import './App.css';
import { Route, Routes } from 'react-router-dom';

import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import HomePage from './pages/HomePage/HomePage';
import FamiliaPage from './pages/FamiliaPage/FamiliaPage';
import ExterioresPage from './pages/ExterioresPage/ExterioresPage';
import InfantilPage from './pages/InfantilPage/InfantilPage';
import ContactoPage from './pages/ContactoPage/ContactoPage';
import ComunionesPage from './pages/ComunionesPage/CominionesPage';
import LoginPage from './pages/LoginPage/LoginPage';
// import PrivatePage from './pages/PrivatePage/PrivatePage';


function App() {
  return (
    <div className="App">
  
      <NavBarComponent></NavBarComponent>
      <Routes>
        <Route exact path='/' element={<HomePage/>}></Route>
        <Route exact path='/contacto' element={<ContactoPage/>}></Route>
        <Route exact path='/login' element={<LoginPage/>}></Route>
        <Route exact path='/familia' element={<FamiliaPage/>}></Route>
        <Route exact path='/infantil' element={<InfantilPage/>}></Route>
        <Route exact path='/comuniones' element={<ComunionesPage/>}></Route>
      </Routes>
    </div> 
  );
}

export default App;
