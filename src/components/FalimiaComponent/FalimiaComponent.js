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
      FamiliaComponent
      {familia.map(fam => {
        return(
          <img src={fam.photo} alt={fam.alt}/>
        )
      })}
    </div>
    
  )
};

FalimiaComponent.propTypes = {};

FalimiaComponent.defaultProps = {};

export default FalimiaComponent;
