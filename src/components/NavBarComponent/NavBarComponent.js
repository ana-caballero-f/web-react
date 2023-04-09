import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBarComponent.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { doLogout } from '../../store/auth/actions';


const NavBarComponent = () => {

  const {user} = useSelector((state)=> state.AuthReducer)

  const dispatch = useDispatch

  function cerrarSesion() {
    dispatch(doLogout())
  }


  return(
    <div className={styles.NavBarComponent}> 
    {/* <div className={styles.ImgNav}
    > 
    <img src={ImagenLogo} alt="Logo"/>
    </div> */}


      <nav>
        <Link className={styles.NavLink} to='/'>Inicio </Link>
        {/* <Link className={styles.NavLink} to='/sesiones'>Sesiones</Link>           */}
        <Link className={styles.NavLink} to='/contacto'>Contacto </Link>
        <Link className={styles.NavLink} to='/private'>Área privada </Link>
        
        {user.user && user.user.id? "" : <Link className={styles.NavLink} to='/login'> Login </Link>}          
        {user.user && user.user.id? <Link className={styles.NavLink} to='/private'></Link> : ""}          
        {user.user && user.user.id? <Link onClick ={cerrarSesion} className={styles.NavLink}> Logout </Link> : ""}                      
      </nav>

  </div>
  );
}

NavBarComponent.propTypes = {};

NavBarComponent.defaultProps = {};

export default NavBarComponent;
