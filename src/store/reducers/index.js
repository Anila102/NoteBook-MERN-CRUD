// import Notes from "./Notes";
import { combineReducers } from "redux";
import Users from "./Users";
import notes from "./notes";


const rootReducer= combineReducers({
    notes:notes,

    Users:Users
})

export default rootReducer;