import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";
import userReducer from "./userReducer";
import apiDataAxiousReducer from "./apiDataAxiousReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    user:userReducer,
    data:apiDataAxiousReducer
})

export default rootReducer;