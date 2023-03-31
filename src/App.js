// import './App.css';
import NavBarComponent from './components/NavBarComponent/NavBarComponent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
    <Router>
      <NavBarComponent></NavBarComponent>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/familia" element={<FamiliaPage/>}></Route>
        <Route path="/exteriores" element={<ExterioresPage/>}></Route>
        <Route path="/comuniones" element={<ComunionesPage/>}></Route>
        <Route path="/infantil" element={<InfantilPage/>}></Route>
        <Route path="/contacto" element={<ContactoPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/private" element={user && user.id? <PrivatePage/> : <LoginPage/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
