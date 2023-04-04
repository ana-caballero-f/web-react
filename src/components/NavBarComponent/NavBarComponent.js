import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBarComponent.module.scss';
import { Link } from 'react-router-dom';


const NavBarComponent = () => {
  return(
    <div className={styles.NavBarComponent}> 
    {/* <div className={styles.ImgNav}
    > 
    <img src={ImagenLogo} alt="Logo"/>
    </div> */}
      <nav>
        <Link className={styles.NavLink} to='/'>Inicio</Link>
        {/* <Link className={styles.NavLink} to='/sesiones'>Sesiones</Link>           */}
        <Link className={styles.NavLink} to='/contacto'>Contacto</Link>          
        <Link className={styles.NavLink} to='/login'>Login</Link>          
        <Link className={styles.NavLink} to='/private'>Área Privada</Link>          
        
      </nav>

  </div>
  );
}

NavBarComponent.propTypes = {};

NavBarComponent.defaultProps = {};

export default NavBarComponent;
