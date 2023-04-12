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
    <form ref={form} onSubmit={sendEmail}>
      <label>Nombre</label>
      <input placeholder='Escribe tu nombre' type="text" name="name" required/>
      <label>Apellidos</label>
      <input placeholder='Escribe tus apellidos' type="text" name="surname" required/>
      <label>Email</label>
      <input placeholder='Escribe tu correo' type="email" name="email" required/>
      <label>Teléfono</label>
      <input placeholder='Escribe tu teléfono' type="text" name="telefono" required/>
      <label>Quiero información sobre ...</label>
      <textarea placeholder='Dime el tipo de sesión' name="mensaje" required/>
      <input type="submit" value="Send" />
    </form>
  );
};
 

FormularioComponent.propTypes = {};

FormularioComponent.defaultProps = {};

export default FormularioComponent;
