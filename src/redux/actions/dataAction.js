import TYPES from "../types"
import axios from "axios"

export const getData = () => (dispatch) => {
  axios.get("https://reqres.in/api/users?page=2").then((res) => {
    console.log(res.data)
    const users = res.data.data
    dispatch({
      type: TYPES.FETCH_DATA,
      payload: users,
    })
  })
}
