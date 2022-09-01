import TYPES from "../types"

const initState = {
  data: "",
}

const registReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.REGIST_SUCCESS:
      return {
        data: action.payload,
      }
    default:
      return state
  }
}

export default registReducer
