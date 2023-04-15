import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FavoritasComponent.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFotoFavorita, getFotosFavoritas, updateFotoFav } from '../../store/peticiones/actions';
import { Link } from 'react-router-dom';


const FavoritasComponent = () => {

  const dispatch = useDispatch()

  /* constantes del reducer que se necesitan */
  const {seleccionFavoritas, fotoEliminada, loadingSeleccFavs, comentario, favorita} = useSelector((state) => state.PeticionesReducer)


  /* recoger valores del comentario */
 // const [comment, setComment] = useState("")


  /* cargar las fotos que se van añadiendo en favoritas */
  useEffect(() => {
    dispatch(getFotosFavoritas())
  }, [fotoEliminada])


    /* borrar una foto de favoritas */
    function borrarFoto(id){
      dispatch(deleteFotoFavorita(id))
    }


    /* update dejar comentario */
    function comentar(seleccionFav) {
      dispatch(updateFotoFav(seleccionFav.id, seleccionFav.comment))
      alert("Gracias! Tendré en cuenta tu comentario.")
       }
  

  return(
  
  <div className={styles.FavoritasComponent}>
    <h1 className={styles.FavoritasTitle}> Tu selección de favoritas</h1>
    <p className={styles.FavoritasSubTitle}>Puedes dejarme un comentario o quitarla de favoritas</p>
    <div className={styles.ContainerFotosFavoritas}>
      {seleccionFavoritas.map(seleccionFav => {
        return (
        <div className={styles.FotoComentario}>
          <div>
            <img className={styles.FotosFavoritas} src= {seleccionFav.photo} alt= {seleccionFav.alt}/>
          </div>
          <div className={styles.BloqueComentario}>
            <label className={styles.Label}>Puedes dejarme un comentario:</label><br/>

            <textarea rows="4" cols="50" className={styles.Input} defaultValue={seleccionFav.comment} onChange={(e)=> {seleccionFav.comment = e.target.value}} type='text' placeholder='Escribe aquí...'></textarea>
            <button className={styles.BotonFotosFav} onClick={() => comentar(seleccionFav)}>Mandar comentario</button>

            <button className={styles.BotonFotosFav} onClick={() =>borrarFoto(seleccionFav.id)}>Borrar de favoritas</button>
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
