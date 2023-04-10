import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './FavoritasComponent.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getFotosFavoritas } from '../../store/peticiones/actions';


const FavoritasComponent = () => {

  const dispatch = useDispatch()

  const {seleccionFavoritas, loadingSeleccFavs} = useSelector((state) => state.PeticionesReducer)


    /* para cargar las fotos que se van añadiendo en favoritas */
  useEffect(() => {
    dispatch(getFotosFavoritas())
  }, [])


  
  return(
  <div className={styles.FavoritasComponent}>
   <h1> Tus fotos favoritas</h1>
   <div className={styles.ContainerFotosFavoritas}>
    {seleccionFavoritas.map(seleccionFav => {
      return (
        <div>
          <img src= {seleccionFav.photo} alt= {seleccionFav.alt}/>
          <p>{seleccionFav.id}</p>
        </div>
      )
    })}
    </div>
  </div>
)
};

FavoritasComponent.propTypes = {};

FavoritasComponent.defaultProps = {};

export default FavoritasComponent;
