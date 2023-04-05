import React from 'react';
import PropTypes from 'prop-types';
import styles from './AboutComponent.module.scss';

import FotoAbout from '../../assets/images/carrusel-10.jpg'



const AboutComponent = () => (

  <div className={styles.AboutComponent}>
    <div className={styles.AboutIntro}>
      <section className={styles.TextoIntro}>
        <h1 className={styles.Nombre}>Ana</h1>
        <h6 className={styles.Apellido}>Caballero</h6>
        <p>Desde siempre me he sentido atraída por todo lo referente a la imagen, 
        la luz, la estética y la composición.</p>
        <p>Estudié fotografía en una escuela de arte y me ha sido mi profesión todos estos años.</p>
        <p>En mis trabajos tienen gran peso las herramientas de edición y retoque digital.</p>
        
      </section>

      <section className={styles.FotoIntro}>
        <img src={FotoAbout} alt="foto"></img>
      </section>
    </div>
  </div>
);

AboutComponent.propTypes = {};

AboutComponent.defaultProps = {};

export default AboutComponent;
