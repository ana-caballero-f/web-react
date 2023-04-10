import React from 'react';
import PropTypes from 'prop-types';
import styles from './DetalleComponent.module.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import {addFotoFav} from '../../store/peticiones/actions'



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
    
      <img className={styles.ImagenDetalle} src={foto.photo} alt={foto.alt}/>
      <p>{foto.id}</p>
      <button onClick={addFoto}>Añadir a favoritas</button>
      <Link to='/private'><button>X</button></Link>
    </div>
)
};

DetalleComponent.propTypes = {};

DetalleComponent.defaultProps = {};

export default DetalleComponent;
