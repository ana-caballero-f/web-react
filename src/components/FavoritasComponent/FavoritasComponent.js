import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './FavoritasComponent.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFotoFavorita, getFotosFavoritas, updateFotoFav } from '../../store/peticiones/actions';


const FavoritasComponent = () => {

  const dispatch = useDispatch()

  const {seleccionFavoritas, fotoEliminada, loadingSeleccFavs, puntuacion} = useSelector((state) => state.PeticionesReducer)


    /* para cargar las fotos que se van añadiendo en favoritas */
  useEffect(() => {
    dispatch(getFotosFavoritas())
  }, [fotoEliminada])


    function borrarFoto(id){
      dispatch(deleteFotoFavorita(id))
    }

    function puntuar(puntos) {
      dispatch(updateFotoFav())
    }
  

  return(
  <div className={styles.FavoritasComponent}>
   <h1> Tus fotos favoritas</h1>
   <div className={styles.ContainerFotosFavoritas}>
    {seleccionFavoritas.map(seleccionFav => {
      return (
        <div>
          <img src= {seleccionFav.photo} alt= {seleccionFav.alt}/>
          <p>Ref foto: #{seleccionFav.id}</p>
          <div>
            <button onClick={() => puntuar(seleccionFav.puntuacion) ? "⭐" : ""}>Darle una estrella</button>

          </div>
          <button onClick={() =>borrarFoto(seleccionFav.id)}>Borrar de favoritas</button>
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
