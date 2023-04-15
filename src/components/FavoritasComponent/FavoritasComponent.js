import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FavoritasComponent.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFotoFavorita, getFotosFavoritas, updateFotoFav } from '../../store/peticiones/actions';
import { Link } from 'react-router-dom';


const FavoritasComponent = () => {

  const dispatch = useDispatch()

  /* constantes del reducer que se necesitan */
  const {seleccionFavoritas, fotoEliminada, loadingSeleccFavs, comentario} = useSelector((state) => state.PeticionesReducer)


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
      //console.log(setComment)
      // alert("Gracias! Tendré en cuenta tu comentario.")
      //setComment("")
    }
  

  return(
  
  <div className={styles.FavoritasComponent}>
   <h1 className={styles.FavoritasTitle}> Tus favoritas</h1>
   <div className={styles.ContainerFotosFavoritas}>
    {seleccionFavoritas.map(seleccionFav => {
      return (
        <div className={styles.FotoComentario}>
          <div>
            <img className={styles.FotosFavoritas} src= {seleccionFav.photo} alt= {seleccionFav.alt}/>
          </div>
          <div>
            <label>Deja un comentario</label>

            <input defaultValue="" onChange={(e)=> {seleccionFav.comment = e.target.value}} type='text'></input>
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
