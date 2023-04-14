import React from 'react';
import PropTypes from 'prop-types';
import styles from './SesionesComponent.module.scss';

import { Link } from 'react-router-dom';
import LinkFamilia from '../../assets/images/linkFamilia.jpg'
import LinkComunion from '../../assets/images/linkComuniones.jpg'
import LinkInfantil from '../../assets/images/linkInfant-2.jpg'


const SesionesComponent = () => (
  <div className={styles.SesionesComponent}> 
    <div>
      <p className={styles.TxSesiones}>Porfolio</p>
    </div>
      <nav>
        <div className={styles.FotosSesiones}>
          <div className={styles.CardSesiones}>
            <Link to='/familia'><img src={LinkFamilia} alt="foto famalia" className={styles.SesionesLinks}/></Link>
            <div>
              <h4 className={styles.CardText}>Familias</h4>
            </div>
          </div>
          <div className={styles.CardSesiones}>
            <Link to='/infantil'><img src={LinkInfantil} alt="foto infantil" className={styles.SesionesLinks}/></Link>
            <div>
              <h4 className={styles.CardText}>Infantil</h4>
            </div>
          </div>
          <div className={styles.CardSesiones}>
          <Link to='/comuniones'><img src={LinkComunion} alt="foto comunion" className={styles.SesionesLinks}/></Link>
            <div>
              <h4 className={styles.CardText}>Comuniones</h4>
            </div>
          </div>
           
                 
        </div>
      </nav>

  </div>
);

SesionesComponent.propTypes = {};

SesionesComponent.defaultProps = {};

export default SesionesComponent;
