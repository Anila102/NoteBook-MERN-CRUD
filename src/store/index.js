import { createStore, applyMiddleware, compose} from "redux";
import  rootReducer  from "./reducers/index";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares=[thunk]
const store= createStore(
    rootReducer,
   {

   },
    composeEnhancers(applyMiddleware(thunk)),
    // applyMiddleware(...middlewares),
    // composedEnhancer
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
)
export default store;