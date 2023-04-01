import React from 'react';
import PropTypes from 'prop-types';
import styles from './SesionesComponent.module.scss';

import { Link } from 'react-router-dom';


const SesionesComponent = () => (
  <div className={styles.SesionesComponent}>
      <nav>
      <h1>links a las sesiones:</h1>
        <Link className={styles.SesionesLink} to='/familia'>Familia</Link>
        <Link className={styles.SesionesLink} to='/infantil'>Infantil</Link>
        <Link className={styles.SesionesLink} to='/comuniones'>Comuniones</Link>         
      </nav>

  </div>
);

SesionesComponent.propTypes = {};

SesionesComponent.defaultProps = {};

export default SesionesComponent;
