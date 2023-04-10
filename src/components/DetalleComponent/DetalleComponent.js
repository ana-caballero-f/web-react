import React from 'react';
import PropTypes from 'prop-types';
import styles from './DetalleComponent.module.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {addFotoFav} from '../../store/peticiones/actions'
import { useParams } from 'react-router-dom';


const DetalleComponent = () => {

  /* importar la store para recoger la info. Con useSelector se cogen las variables */
  const { foto, loadingFotoDet } = useSelector((state) => state.PeticionesReducer)


    const dispatch = useDispatch();
    const params = useParams();

  function addFoto() {
    dispatch(addFotoFav(params.id))
  }


  if(loadingFotoDet) {
    return (
      <div>
        <p>Cargando foto</p>
      </div>
    )
  }

  return (
    <div className={styles.DetalleComponent}>
    
      <img src={foto.photo} alt={foto.alt}/>
      <p>{foto.id}</p>
      <button onClick={addFoto}>Añadir a favoritas</button>
    </div>
)
};

DetalleComponent.propTypes = {};

DetalleComponent.defaultProps = {};

export default DetalleComponent;
