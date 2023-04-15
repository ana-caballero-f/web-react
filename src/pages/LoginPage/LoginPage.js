
import styles from './LoginPage.module.scss';
import LoginComponent from "../../components/LoginComponent/LoginComponent"
import RegistroComponent from "../../components/RegistroComponent/RegistroComponent"



export default function LoginPage() {

    
    return(
       <div className={styles.LoginPage}>
            <h2 className={styles.LoginTitle}>Para entrar en el área privada, tienes que tener una cuenta</h2> 
            <div className={styles.FormulariosLogin}> 
            <RegistroComponent></RegistroComponent>
            <LoginComponent></LoginComponent>
            </div>
       </div> 
    )
}
