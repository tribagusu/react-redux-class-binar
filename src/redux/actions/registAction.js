import TYPES from "../types"
import axios from "axios"

export const regist = (payload) => {
  return (dispatch) => {
    axios.post("https://reqres.in/api/register", payload).then((res) => {
      console.log(res.data.token)
      dispatch({
        type: TYPES.REGIST_SUCCESS,
        payload: res.data.token,
      })
    })
  }
}
