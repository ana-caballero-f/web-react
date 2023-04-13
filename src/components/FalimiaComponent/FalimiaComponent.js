import React from 'react';
import PropTypes from 'prop-types';
import styles from './FalimiaComponent.module.scss';

import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getFotosFam} from '../../store/peticiones/actions';
import { Link } from 'react-router-dom';



const FalimiaComponent = () => {

  const dispatch = useDispatch()
  const {familia, loadingFotosFamilia} = useSelector((state) => state.PeticionesReducer)

  useEffect(() => {
    dispatch(getFotosFam())
  },[])


  return (

    <div className={styles.FalimiaComponent}>
      <div className={styles.ContainerFotosFam}>
      {familia.map(fam => {
        return(
          <img className={styles.FotosFam} src={fam.photo} alt={fam.alt}/>
        )
      })}
      </div>
    </div>
    
  )
};

FalimiaComponent.propTypes = {};

FalimiaComponent.defaultProps = {};

export default FalimiaComponent;
