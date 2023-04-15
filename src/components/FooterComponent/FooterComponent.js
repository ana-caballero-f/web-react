import React from 'react';
import PropTypes from 'prop-types';
import styles from './FooterComponent.module.scss';



const FooterComponent = () => {


  function getYear() {
    return new Date().getFullYear();
  }

  return (
  
  <div className={styles.FooterComponent}>
    <div className={styles.Footer}>
      <h4 className={styles.FooterText}>Sígueme en:</h4> 
      <ul className={styles.FooterContainer}>
          <li><a className={styles.FooterLink} href="https://www.linkedin.com/in/ana-caballero-frontend-developer/">LinkedIn</a></li>
          <li><a className={styles.FooterLink} href="https://www.facebook.com/anacaballerofotografia">Facebook</a></li>
          <li><a className={styles.FooterLink} href="https://www.instagram.com/ana_caballero_fotografia/">Instagram</a></li>
          <li><a className={styles.FooterLink} href="https://github.com/ana-caballero-f">GitHub</a></li>  
      </ul>
    </div>
    <p className={styles.FooterYear}>Diseño Web y fotografías Ana Caballero © { getYear() }</p> 
  </div>
)
};

FooterComponent.propTypes = {};

FooterComponent.defaultProps = {};

export default FooterComponent;
