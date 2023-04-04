import { combineReducers } from "redux";

import PeticionesReducer from "./peticiones/reducer"
import AuthReducer from "./auth/reducer";


const rootReducer = combineReducers({
    PeticionesReducer,
    AuthReducer
})

export default rootReducer