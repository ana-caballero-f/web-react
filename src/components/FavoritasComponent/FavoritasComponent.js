import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './FavoritasComponent.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFotoFavorita, getFotosFavoritas } from '../../store/peticiones/actions';


const FavoritasComponent = () => {

  const dispatch = useDispatch()

  const {seleccionFavoritas, fotoEliminada, loadingSeleccFavs} = useSelector((state) => state.PeticionesReducer)
  const {user} = useSelector()


    /* para cargar las fotos que se van añadiendo en favoritas */
  useEffect(() => {
    dispatch(getFotosFavoritas())
  }, [fotoEliminada])


    function borrarFoto(id){
      dispatch(deleteFotoFavorita(id))
    }
  
    function puntuar(puntos){
      dispatch(puntuar...(puntso))
    }

  return(
  <div className={styles.FavoritasComponent}>
   <h1> Tus fotos favoritas</h1>
   <div className={styles.ContainerFotosFavoritas}>
    {user.misFavoritas.map(seleccionFav => {
      return (
        <div>
          <img src= {seleccionFav.photo} alt= {seleccionFav.alt}/>
          <p>Ref foto: #{seleccionFav.id}</p>
          <button onClick={() =>borrarFoto(seleccionFav.id)}>Borrar de favoritas</button>
          <div>
            <button onClick={puntuar(1)}{seleccionFav.puntuacion >1 ?</button>? }>1</button>
            <button onClick={puntuar(2)}{seleccionFav.puntuacion >2? }>2</button>
            <button onClick={puntuar(3)}>{seleccionFav.puntuacion >3? }3</button>
            <button onClick={puntuar(4)}>4</button>
            <button onClick={puntuar(5)}>5</button>

          </div>
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
