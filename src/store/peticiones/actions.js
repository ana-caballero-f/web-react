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
    GET_FOTOS_INF_FAIL,

    GET_FOTOS_PRIV,
    GET_FOTOS_PRIV_OK,
    GET_FOTOS_PRIV_FAIL,

    GET_FOTO_DET,
    GET_FOTO_DET_OK,
    GET_FOTO_DET_FAIL,

    POST_FOTO_FAV,
    POST_FOTO_FAV_OK,
    POST_FOTO_FAV_FAIL,

    GET_FOTOS_FAVORITAS,
    GET_FOTOS_FAVORITAS_OK,
    GET_FOTOS_FAVORITAS_FAIL


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

/* acciones para las fotos área privada */
export function actionGetFotosPriv() {
    return{
        type: GET_FOTOS_PRIV
    }
}

export function actionGetFotosPrivOk(priv) {
    return{
        type: GET_FOTOS_PRIV_OK,
        payload: priv
        }
}

export function actionGetFotosPrivFail(error) {
    return{
        type: GET_FOTOS_PRIV_FAIL,
        payload: error
        }
}

export function getFotosPriv() {
    return async (dispatch)=>{
        dispatch(actionGetFotosPriv())
        try{
            const response = await axios.get("http://localhost:3000/private")
            dispatch(actionGetFotosPrivOk(response.data))
        }catch(error) {
            dispatch(actionGetFotosPrivFail(error))
        }
    }
}


/* acciones para la foto detalle */
export function actionGetFotoDetalle(idFoto) {
    return{
        type: GET_FOTO_DET,
        payload: idFoto
    }
}

export function actionGetFotoDetalleOk(fotoDetalle) {
    return{
        type: GET_FOTO_DET_OK,
        payload: fotoDetalle
        }
}

export function actionGetFotoDetalleFail(error) {
    return{
        type: GET_FOTO_DET_FAIL,
        payload: error
        }
}



export function getFotoDetalle(idFoto) {
    return async (dispatch)=>{
        dispatch(actionGetFotoDetalle(idFoto))
        try{
            const response = await axios.get(`http://localhost:3000/private/${idFoto}`)
            dispatch(actionGetFotoDetalleOk(response.data))
        }catch(error) {
            dispatch(actionGetFotoDetalleFail(error))
        }
    }
}


/* acciones para añadir a favoritas */
export function actionPostFotoFav() {
    return{
        type: POST_FOTO_FAV
    }
}

export function actionPostFotoFavOk(fotoFav) {
    return{
        type: POST_FOTO_FAV_OK,
        payload: fotoFav
        }
}

export function actionPostFotoFavFail(error) {
    return{
        type: POST_FOTO_FAV_FAIL,
        payload: error
        }
}

export function addFotoFav(fotoFavorita) {
    return async (dispatch)=>{
        dispatch(actionPostFotoFav(fotoFavorita))
        try{
            const response = await axios.post("http://localhost:3000/favoritas", fotoFavorita)
            dispatch(actionPostFotoFavOk(response.data))
        }catch(error) {
            dispatch(actionPostFotoFavFail(error))
        }
    }
}

/* acciones para ver selección favoritas */
export function actionGetFotosFavs() {
    return{
        type: GET_FOTOS_FAVORITAS
    }
}

export function actionGetFotosFavsOk(fotosFavs) {
    return{
        type: GET_FOTOS_FAVORITAS_OK,
        payload: fotosFavs
        }
}

export function actionGetFotosFavsFail(error) {
    return{
        type: GET_FOTOS_FAVORITAS_FAIL,
        payload: error
        }
}

export function getFotosFavoritas() {
    return async (dispatch)=>{
        dispatch(actionGetFotosFavs())
        try{
            const response = await axios.get("http://localhost:3000/favoritas")
            dispatch(actionGetFotosFavsOk(response.data))
        }catch(error) {
            dispatch(actionGetFotosFavsFail(error))
        }
    }
}