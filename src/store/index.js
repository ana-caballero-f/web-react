import { createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
/* quitar */
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

/* cuando haya un cambio de usuario, lo guarda en la store */
store.subscribe(() => {
    const json = JSON.stringify(store.getState().AuthReducer.user)  /* getState da todos los reducer, coger .AuthReducer.user (variable que necesitamos
                                                                        stringify para transformar el objeto user a texto) */
    localStorage.setItem("_user", json)
})

export default store