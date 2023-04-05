import axios from 'axios'
import {
DO_LOGIN,
DO_LOGIN_OK,
DO_LOGIN_FAIL,

DO_LOGOUT,
DO_LOGOUT_OK,
DO_LOGOUT_FAIL
} from './actionTypes'


/* funciones para login */
export function actionDoLogin(loginData) {
    return {
        type: DO_LOGIN,
        payload: loginData
    }
}

export function actionDoLoginOk(userDetails) {
    return {
        type: DO_LOGIN_OK,
        payload: userDetails
    }
}

export function actionDoLoginFail(error) {
    return {
        type: DO_LOGIN_FAIL,
        payload: error
    }
}

export function doLogin(userData) {
    return async(dispatch) => {
        try{
            console.log('userData',userData)
            dispatch(actionDoLogin(userData))
            const response = await axios.post("http://localhost:3000/login", userData)
            dispatch(actionDoLoginOk(response.data))
        }catch (error) {
            dispatch(actionDoLoginFail(error))
        }
    }
}


/* funciones para logout */
export function actionDoLogout() {
    return {
        type: DO_LOGOUT
    }
}

export function actionDoLogoutOk() {
    return {
        type: DO_LOGOUT_OK
    }
}

export function actionDoLogoutFail(error) {
    return {
        type: DO_LOGOUT_FAIL,
        payload: error
    }
}

export function doLogout() {
    return (dispatch) =>{
        try {
            dispatch(actionDoLogout())
            dispatch(actionDoLogoutOk())
        }catch (error) {
            dispatch(actionDoLogoutFail())
        }
    }
}