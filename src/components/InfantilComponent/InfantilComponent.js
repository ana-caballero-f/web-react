import React from 'react';
import PropTypes from 'prop-types';
import styles from './InfantilComponent.module.scss';

import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getFotosInf} from '../../store/peticiones/actions';

import { Link } from 'react-router-dom';


const InfantilComponent = () => {

  const dispatch = useDispatch()
  const {infantil, loadingFotosInf} = useSelector((state) => state.PeticionesReducer)

  
  useEffect(() => {
    dispatch(getFotosInf())
  }, [])
  

  return(
  <div className={styles.InfantilComponent}>
  <h1 className={styles.InfantilTitle}>Fotografía infantil</h1>
    <div className={styles.ContainerFotosInf}>
    {infantil.map(inf => {
      return (
        <img className={styles.FotosInf} src={inf.photo} alt={inf.alt}/>
      )
    })}
    </div>
  </div>
)
};

InfantilComponent.propTypes = {};

InfantilComponent.defaultProps = {};

export default InfantilComponent;
