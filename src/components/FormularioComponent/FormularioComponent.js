import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormularioComponent.module.scss';

import emailjs from "@emailjs/browser";
import { useRef } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const FormularioComponent = () => {

  const form = useRef();
  const MySwal= withReactContent(Swal)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_npt7czb', 'template_9x2yos7', form.current, 'oCARw5ggzhnvntNQ2')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
          MySwal.fire({
            title: <p>¡Gracias por contactar! En breve recibirás la información solicitada</p>
          })
      }, 
      (error) => {
          console.log(error.text);
      });
  };


  
  return (
    <div className={styles.FormularioComponent}>
      <h1 className={styles.FormularioTitle}>Formulario de contacto</h1>
      <p className={styles.FormularioTitle}>Rellena el formulario y me pondré en contacto contigo para darte la información solicitada</p>
      <form ref={form} onSubmit={sendEmail}>
        <label className={styles.FormularioLabel}>Nombre</label>
        <input className={styles.FormularioInput} placeholder='Escribe tu nombre' type="text" name="name" required/>
        <label className={styles.FormularioLabel}>Apellidos</label>
        <input className={styles.FormularioInput} placeholder='Escribe tus apellidos' type="text" name="surname" required/>
        <label className={styles.FormularioLabel}>Email</label>
        <input className={styles.FormularioInput} placeholder='Escribe tu correo' type="email" name="email" required/>
        <label className={styles.FormularioLabel}>Teléfono</label>
        <input className={styles.FormularioInput} placeholder='Escribe tu teléfono' type="text" name="telefono" required/>
        <label className={styles.FormularioLabel}>Quiero información sobre ...</label>
        <select className={styles.FormularioInput} name="mensaje" required>
          <option value="infantil">Sesión Infantil</option>
          <option value="comunion">Sesión de Comunion</option>
          <option value="familia">Sesión Familiar</option>
        </select>
        <input className={styles.FormularioButton} type="submit" value="Enviar mensaje" />
      </form>
    </div>
  );
};
 

FormularioComponent.propTypes = {};

FormularioComponent.defaultProps = {};

export default FormularioComponent;
