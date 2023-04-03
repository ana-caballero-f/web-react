import axios from 'axios'
import {
    GET_FOTOS_FAM,
    GET_FOTOS_FAM_OK,
    GET_FOTOS_FAM_FAIL,

    GET_FOTOS_COM,
    GET_FOTOS_COM_OK,
    GET_FOTOS_COM_FAIL,

    GET_FOTOS_INF,
    GET_FOTOS_INF_OK,
    GET_FOTOS_INF_FAIL

} from "./actionTypes"


/* acciones para las fotos de familia */
export function actionGetFotosFam() {
    return{
        type: GET_FOTOS_FAM
    }
}

export function actionGetFotosFamOk(familia) {
    return{
        type: GET_FOTOS_FAM_OK,
        payload: familia
        }
}

export function actionGetFotosFamFail(error) {
    return{
        type: GET_FOTOS_FAM_FAIL,
        payload: error
        }
}

export function getFotosFam() {
    return async (dispatch)=>{
        dispatch(actionGetFotosFam())
        try{
            const response = await axios.get("http://localhost:3000/familia")
            dispatch(actionGetFotosFamOk(response.data))
        }catch(error) {
            dispatch(actionGetFotosFamFail(error))
        }
    }
}

/* acciones para las fotos de comunión */
export function actionGetFotosCom() {
    return{
        type: GET_FOTOS_COM
    }
}

export function actionGetFotosComOk(comunion) {
    return{
        type: GET_FOTOS_COM_OK,
        payload: comunion
        }
}

export function actionGetFotosComFail(error) {
    return{
        type: GET_FOTOS_COM_FAIL,
        payload: error
        }
}

export function getFotosCom() {
    return async (dispatch)=>{
        dispatch(actionGetFotosCom())
        try{
            const response = await axios.get("http://localhost:3000/comunion")
            dispatch(actionGetFotosComOk(response.data))
        }catch(error) {
            dispatch(actionGetFotosComFail(error))
        }
    }
}


/* acciones para las fotos infantil */
export function actionGetFotosInf() {
    return{
        type: GET_FOTOS_INF
    }
}

export function actionGetFotosInfOk(infantil) {
    return{
        type: GET_FOTOS_INF_OK,
        payload: infantil
        }
}

export function actionGetFotosInfFail(error) {
    return{
        type: GET_FOTOS_INF_FAIL,
        payload: error
        }
}

export function getFotosInf() {
    return async (dispatch)=>{
        dispatch(actionGetFotosInf())
        try{
            const response = await axios.get("http://localhost:3000/infantil")
            dispatch(actionGetFotosInfOk(response.data))
        }catch(error) {
            dispatch(actionGetFotosInfFail(error))
        }
    }
}