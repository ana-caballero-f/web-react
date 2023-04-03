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


const initialState = {
    familia: [],
    loadingFotosFam: false,
    comunion: [],
    loadingFotosCom: false,
    infantil: [],
    loadingFotosInf: false,
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
            state = {...state, loadingFotosFam: false, error: {message: action.payload}}
            break


        case GET_FOTOS_COM:
            state = {...state, loadingFotosCom: true}
            break

        case GET_FOTOS_COM_OK:
            state = {...state, loadingFotosCom: false, comunion: action.payload}
            break

        case GET_FOTOS_COM_FAIL:
            state = {...state, loadingFotosCom: false, error: {message: action.payload}}
            break


        case GET_FOTOS_INF:
            state = {...state, loadingFotosInf: true}
            break
    
        case GET_FOTOS_INF_OK:
            state = {...state, loadingFotosInf: false, infantil: action.payload}
            break
    
        case GET_FOTOS_INF_FAIL:
            state = {...state, loadingFotosCom: false, error: {message: action.payload}}
            break




        default:
            break
            
        }
        return state
    }
