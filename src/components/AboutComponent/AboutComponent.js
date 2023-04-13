import React from 'react';
import PropTypes from 'prop-types';
import styles from './AboutComponent.module.scss';

import FotoAbout from '../../assets/images/carrusel-10.jpg'



const AboutComponent = () => (

  <div className={styles.AboutComponent}>
    <div className={styles.AboutIntro}>
      <section className={styles.TextoIntro}>
        <p className={styles.TextoFot}>FOTOGRAFÍA</p>
        <h3 className={styles.Nombre}>AnaCaballero</h3>
        <p className={styles.TextoParrafo}>Desde siempre me he sentido atraída por todo lo referente a la imagen, 
          la luz, y la composición.</p>
        <p className={styles.TextoParrafo}>Estudié fotografía en una Escuela de Arte y ha sido mi profesión todos estos años.
          En mis trabajos tienen gran peso las herramientas de edición y retoque digital.</p>
      </section>

      <section className={styles.FotoIntro}>
        <img className={styles.ImageAbout} src={FotoAbout} alt="foto"></img>
      </section>
    </div>
  </div>
);

AboutComponent.propTypes = {};

AboutComponent.defaultProps = {};

export default AboutComponent;
