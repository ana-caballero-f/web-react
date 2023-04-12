import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './LoginComponent.module.scss';

import { useState } from 'react';
import {useDispatch, useSelector,} from 'react-redux'
import { doLogin } from '../../store/auth/actions'
import { Navigate, useNavigate } from 'react-router-dom';



const LoginComponent = () => {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")


  const {user, error} = useSelector((state)=> state.AuthReducer) /* importar del state de AuthReducer {user} para observar en el useEffect 
                                                                    y {error} para que salga <p>con mensaje de error */
  
  const dispatch = useDispatch()
  
  function checkLogin() {
    dispatch(doLogin({email: name, password: password}))
    setName("")
    setPassword("")
  }


  useEffect (()=> { 
    // console.log(user)
    if(user.user && user.user.id){
      <Navigate to="/private" replace></Navigate>
      }
  },[user])
 

  return(
    <div className={styles.LoginComponent}>
      <form>
        <label>Nombre</label><br/>
        <input className={styles.LoginInput} value={name} onChange={(e) => setName(e.target.value)}></input><br/>

        <label>Constraseña</label><br/>
        <input className={styles.LoginInput} value={password} onChange={(e) => setPassword(e.target.value)}></input><br/>

      </form>
      <button className={styles.LoginButton} onClick={checkLogin}>Login</button>
      {error.message && <p>Hay un error en el login</p> }
    </div>
  )
};

LoginComponent.propTypes = {};

LoginComponent.defaultProps = {};

export default LoginComponent;
