import React from 'react';
import PropTypes from 'prop-types';
import styles from './RegistroComponent.module.scss';
import axios from 'axios';


import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


import { doRegister } from '../../store/auth/actions';



// import { notification } from 'antd';
// import { useNavigate } from 'react-router';



const RegistroComponent = () => {


  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  

  const {register, errorRegister} = useSelector((state)=> state.AuthReducer) /* importar del state de AuthReducer {user} para observar en el useEffect 
                                                                    y {error} para que salga <p>con mensaje de error */
  
  const dispatch = useDispatch()
  

  function checkRegister() {
    dispatch(doRegister({name: name, email: email, password: password}))
    setName("")
    setEmail("")
    setPassword("")
  }


  // useEffect (()=> { 
  //   console.log(register)
  //   if(){
      
  //     }
  // },[register])
 

  return(
    <div className={styles.RegistroComponent}>
      <form>
        <label>Nombre</label>
        <input value={name} onChange={(e) => setName(e.target.value)}></input><br/>

        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)}></input><br/>

        <label>Constraseña</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)}></input><br/>

      </form>
      <button onClick={checkRegister}>Registrarme</button>
      {errorRegister.messageRegister && <p>Hay un error en el registro</p> }
    </div>
  )




  
//   const history = useNavigate();

//   const handleSubmit = async event => {
//       console.log("registrado");
//       try {
//           event.preventDefault();
//           const registro = {
//               name: event.target.name.value,
//               email: event.target.email.value,
//               password: event.target.password.value
//           };
//           console.log(registro);
//           await axios.post('http://localhost:3000/register', registro)
//           notification.success({ message: 'Registrado!', description: 'Bienvenido! Te has registrado correctamente' })
//           history.push('/login')
        
//       } catch (error) {
//           console.log(error);
//           notification.error({ message: 'Error', description: 'Se ha producido un error a la hora de registrarte' })
//       }
//   }



//   return(
//     <div className={styles.RegistroComponent}>
//       <form className="formulario" onSubmit={handleSubmit}>
//         <section className="cajaTitulo">
//             <p className="titular">Regístrate</p>
//         </section>
//         <div className="campo">
//             <input className="datos" type="text" name="name" placeholder="Introduce tu nombre" required />
//         </div>
//         <div className="campo">
//             <input className="datos" type="email" name="email" placeholder="Introduce tu email" required />
//         </div>
//         <div className="campo">
//             <input className="datos" type="password" name="password" placeholder="Introduce una contraseña" required />
//         </div>
//         <div className="campo">
//             <button type="submit" className="enviar">
//                 Enviar
//             </button>
//         </div>
//       </form>
//   </div>
// )
};

RegistroComponent.propTypes = {};

RegistroComponent.defaultProps = {};

export default RegistroComponent;
