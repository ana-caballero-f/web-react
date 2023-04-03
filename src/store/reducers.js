import { combineReducers } from "redux";

import PeticionesReducer from "./peticiones/reducer"
// import AutenReducer from "./autentificacion/reducer";


const rootReducer = combineReducers({
    PeticionesReducer,
    // AutenReducer
})

export default rootReducer