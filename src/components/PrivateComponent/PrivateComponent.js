import PropTypes from 'prop-types';
import styles from './PrivateComponent.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addFotoFav, getFotosPriv } from '../../store/peticiones/actions';
import { Link } from 'react-router-dom';




const PrivateComponent = () => {

    const dispatch = useDispatch()

    const {priv, loadinFotosPriv} = useSelector((state) => state.PeticionesReducer)

    useEffect(() => {
      dispatch(getFotosPriv())
    }, [])


    function addFoto() {
      dispatch(addFotoFav())
    }


    return(
    <div className={styles.PrivateComponent}>
      <div className={styles.ContainerFotosPriv}>
        {priv.map(pri => {
          return (  
            <div>     
              <img className={styles.ContainerFotosPriv} src={pri.photo} alt={pri.alt}></img>
              <Link to={`/detalle/${pri.id}`}>
                <button>Ampliar</button>  
              </Link>
              <button onClick= {addFoto}>Añadir a favoritas</button> 
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
