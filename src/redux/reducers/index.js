import { combineReducers } from "redux"
import dataReducer from "./dataReducer"
import authReducer from "./authReducer"

const rootReducer = combineReducers({
  authReducer,
  dataReducer,
})

export default rootReducer
