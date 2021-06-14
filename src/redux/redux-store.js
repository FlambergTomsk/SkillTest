import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import homePageReducer from "./homePageReducer";





let reducers = combineReducers({
    homePage: homePageReducer,
})

let store  = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;


export default store;