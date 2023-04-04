import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoginComponent.module.scss';

import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { doLogin } from '../../store/auth/actions'


const LoginComponent = () => {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  function checkLogin() {
    dispatch(doLogin({email: name, password: password}))
  }

  return(
  <div className={styles.LoginComponent}>
    <form>
      <label>Nombre</label>
      <input value={name} onChange={(e) => setName(e.target.value)}></input><br/>

      <label>Constraseña</label>
      <input value={password} onChange={(e) => setPassword(e.target.value)}></input><br/>

    </form>
    <button onClick={checkLogin}>Login</button>

  </div>
)
};

LoginComponent.propTypes = {};

LoginComponent.defaultProps = {};

export default LoginComponent;
