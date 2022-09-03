import TYPES from "../types"
import axios from "axios"

export const handleRegist = (payload) => {
  return (dispatch) => {
    axios.post("https://reqres.in/api/register", payload).then((res) => {
      console.log(res.data.token)
      dispatch({
        type: TYPES.POST_REGIST,
        payload: res.data.token,
      })
    })
  }
}

export const handleLogin = (payload) => (dispatch) => {
  axios.post("https://reqres.in/api/login", payload).then((res) => {
    localStorage.setItem("token", res.data.token)
    dispatch({
      type: TYPES.LOGIN,
      payload: res.data.token,
    })
  })
}
