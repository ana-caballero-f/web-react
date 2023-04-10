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
    GET_FOTOS_FAVORITAS_FAIL,

    DELETE_FOTO_FAVORITAS,
    DELETE_FOTO_FAVORITAS_OK,
    DELETE_FOTO_FAVORITAS_FAIL

} from "./actionTypes"


const initialState = {
    familia: [],
    loadingFotosFam: false,
    comunion: [],
    loadingFotosCom: false,
    infantil: [],
    loadingFotosInf: false,
    priv: [],
    loadingFotosPriv: false,

    foto: {},                   /* muestra foto individual ampliada */
    loadingFotoDet: false,

    favorita: {},               /* añade foto a "favoritas" */
    loadingFavorita: false,

    seleccionFavoritas: [],     /* estado inicial de las fotos favoritas */
    loadingSeleccFavs: false,

    fotoEliminada: {},          /* foto eliminada */
    loadingFotoEliminada: true,

    error: {
        message: ""
    }
}


export default function PeticionesReducer(state = initialState, action) {
    switch(action.type) {
        case GET_FOTOS_FAM:
            state = {...state, loadingFotosFam: true}
            break

        case GET_FOTOS_FAM_OK:
            state = {...state, loadingFotosFam: false, familia: action.payload}
            break

        case GET_FOTOS_FAM_FAIL:
            state = {...state, loadingFotosFam: false, familia:[], error: {message: action.payload}}
            break


        case GET_FOTOS_COM:
            state = {...state, loadingFotosCom: true}
            break

        case GET_FOTOS_COM_OK:
            state = {...state, loadingFotosCom: false, comunion: action.payload}
            break

        case GET_FOTOS_COM_FAIL:
            state = {...state, loadingFotosCom: false, comunion:[], error: {message: action.payload}}
            break


        case GET_FOTOS_INF:
            state = {...state, loadingFotosInf: true}
            break
    
        case GET_FOTOS_INF_OK:
            state = {...state, loadingFotosInf: false, infantil: action.payload}
            break
    
        case GET_FOTOS_INF_FAIL:
            state = {...state, loadingFotosCom: false, infantil: [], error: {message: action.payload}}
            break


        case GET_FOTOS_PRIV:
            state = {...state, loadingFotosPriv: true}
            break
        
        case GET_FOTOS_PRIV_OK:
            state = {...state, loadingFotosPriv: false, priv: action.payload}
            break
        
        case GET_FOTOS_PRIV_FAIL:
            state = {...state, loadingFotosPriv: false, priv: [], error: {message: action.payload}}
            break

        
        case GET_FOTO_DET:
            state = {...state, loadingFotoDet: true}
            break
        
        case GET_FOTO_DET_OK:
            state = {...state, loadingFotoDet: false, foto: action.payload}
            break
        
        case GET_FOTO_DET_FAIL:
            state = {...state, loadingFotoDet: false, foto: {}, error: {message: action.payload}}
            break


        case POST_FOTO_FAV:
            state = {...state, loadingFavorita: true}
            break
            
        case POST_FOTO_FAV_OK:
            state = {...state, loadingFavorita: false, favorita: action.payload}
            break
            
        case POST_FOTO_FAV_FAIL:
            state = {...state, loadingFavorita: false, favorita: {}, error: {message: action.payload}}
            break


        case GET_FOTOS_FAVORITAS:
            state = {...state, loadingSeleccFavs: true}
            break

        case GET_FOTOS_FAVORITAS_OK:
            state = {...state, loadingSeleccFavs: false, seleccionFavoritas: action.payload}
            break

        case GET_FOTOS_FAVORITAS_FAIL:
            state = {...state, loadingSeleccFavs: false, seleccionFavoritas:[], error: {message: action.payload}}
            break


        case DELETE_FOTO_FAVORITAS:
            state = {...state, loadingFotoEliminada: false}
            break
    
        case DELETE_FOTO_FAVORITAS_OK:
            state = {...state, loadingFotoEliminada: false, fotoEliminada: action.payload}
            break
    
        case DELETE_FOTO_FAVORITAS_FAIL:
            state = {...state, loadingFotoEliminada: false, fotoEliminada:[], error: {message: action.payload}}
            break


        default:
            break
            
        }
        return state
    }
