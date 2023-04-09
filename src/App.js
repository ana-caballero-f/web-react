// import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';


import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import HomePage from './pages/HomePage/HomePage';
import FamiliaPage from './pages/FamiliaPage/FamiliaPage';
import ExterioresPage from './pages/ExterioresPage/ExterioresPage';
import InfantilPage from './pages/InfantilPage/InfantilPage';
import ContactoPage from './pages/ContactoPage/ContactoPage';
import ComunionesPage from './pages/ComunionesPage/CominionesPage';
import LoginPage from './pages/LoginPage/LoginPage';
import PrivatePage from './pages/PrivatePage/PrivatePage';
import DetalleFotoPage from './pages/DetalleFotoPage/DetalleFotoPage';


function App() {

  const {user} = useSelector((state)=> state.AuthReducer)
  
  return (
    <div className="App">
  
      <NavBarComponent></NavBarComponent>
      <Routes>
        <Route exact path='/' element={<HomePage/>}></Route>
        <Route exact path='/contacto' element={<ContactoPage/>}></Route>
        <Route exact path='/familia' element={<FamiliaPage/>}></Route>
        <Route exact path='/infantil' element={<InfantilPage/>}></Route>
        <Route exact path='/comuniones' element={<ComunionesPage/>}></Route>
        {/* <Route exact path='/login' element={user.user && user.user.id ? <PrivatePage/>: <LoginPage/>}></Route> DESCOMENTAR ESTO */}
        {/* <Route exact path='/private' element = {user.user && user.user.id ? <PrivatePage/>: <LoginPage/>}></Route> DESCOMENTAR ESTO*/}
        <Route exact path='/private' element = {<PrivatePage></PrivatePage>}></Route>
        <Route exact path='/detalle/:id' element = {<DetalleFotoPage></DetalleFotoPage>}></Route>
      </Routes>
    </div> 
  );
}

export default App;
