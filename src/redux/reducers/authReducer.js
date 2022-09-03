import TYPES from "../types"

const initState = {
  token: "",
  tokenLogin: "",
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.POST_REGIST:
      return {
        token: action.payload,
      }

    case TYPES.POST_LOGIN:
      return {
        tokenLogin: action.payload,
      }

    default:
      return state
  }
}

export default authReducer
