import registReducer from "./registReducer"
import dataReducer from "./dataReducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({ registReducer, dataReducer })

export default rootReducer
