import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './CarruselComponent.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getFotosCarrusel } from '../../store/peticiones/actions';

/* importar librería Swiper para carrusel */
import { Navigation, Pagination, A11y, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const CarruselComponent = () => {

  const dispatch = useDispatch()
  const {carrusel} = useSelector((state) => state.PeticionesReducer)

  useEffect(() => {
    dispatch(getFotosCarrusel())
  }, [])


  return (
  <div className={styles.CarruselComponent}>
  <Swiper

    style={{
        "--swiper-navigation-color": "#000000",
        "--swiper-navigation-border": "solid black 2px",
       
      }}
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay
         

  >
     <div className={styles.ContainerFotosCarrusel}>
    {carrusel.map(fotoCar => {
      return (
        <div>
        <SwiperSlide>
        <img className={styles.FotosCarrusel} src={fotoCar.photo} alt={fotoCar.alt}/>
        </SwiperSlide>
        </div>
      );
    })}
    </div>
    </Swiper>
    <div>
      LINK DE CONTACTO
    </div>
  </div>
)
};

CarruselComponent.propTypes = {};

CarruselComponent.defaultProps = {};

export default CarruselComponent;
