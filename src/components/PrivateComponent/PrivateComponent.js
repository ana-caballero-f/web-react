import PropTypes from 'prop-types';
import styles from './PrivateComponent.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { addFotoFav, getFotosFavoritas, getFotosPriv } from '../../store/peticiones/actions';


const PrivateComponent = () => {

    const dispatch = useDispatch()

    const {priv, favorita, loadinFotosPriv} = useSelector((state) => state.PeticionesReducer)
    
    
    /* para cargar las fotos del área privada */
    useEffect(() => {
      dispatch(getFotosPriv())
    }, [])


    /* para cargar las fotos en el área de favoritas */
    useEffect(() => {
      dispatch(getFotosFavoritas())
    }, [favorita])


    /* añadir una foto a favoritas con el botón "añadir"*/
    function addFoto(id) {
      dispatch(addFotoFav(id))
    }

    return(
    <div className={styles.PrivateComponent}>
    <h1 className={styles.PrivateTitle}>Bienvenido a tu área privada</h1>
    <p className={styles.PrivateText}>Estas son tus fotos seleccionadas.
      Puedes verlas en grande, añadir a favoritas y darles una estrella</p>
      <div className={styles.ContainerFotosPriv}>
        {priv.map(pri => {
          return (  
            <div>     
              <img className={styles.FotosPriv} src={pri.photo} alt={pri.alt}></img>
              <Link to={`/detalle/${pri.id}`}>
                <button className={styles.BotonFotosPriv}>Ampliar</button>  
              </Link>
              <button className={styles.BotonFotosPriv} onClick={() =>addFoto(pri)}>Añadir a favoritas</button> 
            </div>
            )
        })}
      </div>
    </div>
    )
  };



PrivateComponent.propTypes = {};

PrivateComponent.defaultProps = {};

export default PrivateComponent;
