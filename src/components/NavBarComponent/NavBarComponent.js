import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBarComponent.module.scss';

const NavBarComponent = () => {
  return(
  <nav className={styles.NavBarComponent}>
    <a className={styles.NavLink} to='/'>Home</a> 
    </nav>
  )
};

NavBarComponent.propTypes = {};

NavBarComponent.defaultProps = {};

export default NavBarComponent;
