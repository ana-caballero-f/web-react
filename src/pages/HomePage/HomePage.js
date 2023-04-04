import styles from './HomePage.module.scss';

import SesionesComponent from "../../components/SesionesComponent/SesionesComponent";
import AboutComponent from '../../components/AboutComponent/AboutComponent';
import CarruselComponent from '../../components/CarruselComponent/CarruselComponent';


export default function HomePage() {

    return(
        <div className={styles.HomePage}>
            <div className={styles.Container}>
                <section className={styles.Introduce}>
                <AboutComponent></AboutComponent>
                <SesionesComponent/>
                <CarruselComponent></CarruselComponent>
                </section>
            </div>
            
        </div> 
    )
}
