import {
    DO_LOGIN,
    DO_LOGIN_OK,
    DO_LOGIN_FAIL,

    DO_LOGOUT,
    DO_LOGOUT_OK,
    DO_LOGOUT_FAIL

    } from './actionTypes'


    /* recuperar el usuario (está almacenado en el index.js de la store) */
    function recuperarUsuario() {
        try {
            return JSON.parse(localStorage.getItem("_user"))

        }catch(error){
            return {}
        }
    }


    /* Para comprobar el usuario: estado inicial y switch para los tipos de acción que devuelve el state final */

    /* ME FALTA PONER LA FUNCIÓN EN EL user PARA MANTENER LA SESIÓN. PERO SI LO PONGO, ME DA FALLO (NO ME DEJA SALIR NI CON LOGOUT) */
    const initialState = {
        loadingLogin: false, 
        user: {},              
        error: {                
            message: ""
        }
    };  


    export default function AuthReducer(state = initialState, action) {
        switch (action.type) {
            case DO_LOGIN:
                state = {...state, loadingLogin: true}
                break
    
            case DO_LOGIN_OK:
                state = {...state, loadingLogin: false, user: action.payload}
                break
    
            case DO_LOGIN_FAIL:
                state = { ...state, loadingLogin: false, user: {}, error: {message: action.payload}}
                break


            case DO_LOGOUT:
                state = {...state}
                break
            case DO_LOGOUT_OK:
                state = {...state, user:{}}
                break
                
            default:
                break
        }
        return state  
    }