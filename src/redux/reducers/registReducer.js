import TYPES from "../types"

const initState = {
  token: "",
}

const registReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.REGIST_SUCCESS:
      return {
        token: action.payload,
      }
    default:
      return state
  }
}

export default registReducer
