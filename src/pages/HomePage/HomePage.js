import styles from './HomePage.module.scss';

import SesionesComponent from "../../components/SesionesComponent/SesionesComponent";
import ImagenFotos from "../../assets/images/imagen.jpg";

export default function HomePage() {

    return(
        <div className={styles.HomePage}>
            <div className={styles.Container}>
                <section className={styles.Introduce}>
                    <h1 className={styles.Name}>Ana Caballero</h1>
                    <p>fjsldifjoasid fasodifoa idfa jdfo aisjdfoa sfa ifjaoif jdfo
                        ldfijasoidf aisjdfoa dfijaso dfijaso fjoias dfajsdfoiasdf
                        osfijaosfdijoasifjoaisjfoiasjdofijosaidjfoisajdofijsoidjfo</p>
            
                </section>

                <section className={styles.IntroImage}>
                    <img src={ImagenFotos} alt="fhsodif as fotos"></img>
                </section>
            </div>
            <SesionesComponent/>
        </div> 
    )
}
