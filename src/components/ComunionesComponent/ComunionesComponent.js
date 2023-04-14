import React from 'react';
import PropTypes from 'prop-types';
import styles from './ComunionesComponent.module.scss';


import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getFotosCom} from '../../store/peticiones/actions';

import { Link } from 'react-router-dom';


const ComunionesComponent = () => {

  const dispatch = useDispatch()
  const {comunion, loadingFotosCom} = useSelector((state) => state.PeticionesReducer)

  useEffect(() => {
    dispatch(getFotosCom())
  }, [])

  return(
  <div className={styles.ComunionesComponent}>
  <h1 className={styles.ComunionesTitle}>Fotografía de comunión</h1>
    <div className={styles.ContainerFotosCom}>
    {comunion.map(com => {
      return (
        <img className={styles.FotosCom} src={com.photo} alt={com.alt}/>
      )
    })}
  </div>
  </div>
)
};

ComunionesComponent.propTypes = {};

ComunionesComponent.defaultProps = {};

export default ComunionesComponent;
