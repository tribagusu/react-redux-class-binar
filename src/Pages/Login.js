import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { handleLogin } from "../redux/actions/authAction"

const Login = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const { tokenLogin } = useSelector((state) => state.authReducer)
  const dispatch = useDispatch()
  console.log(tokenLogin)

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      email,
      password,
    }
    dispatch(handleLogin(payload))
  }
  return (
    <div>
      <div>
        <h1>Login</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email</label>
              <input onChange={handleEmail} value={email} type="text" />
            </div>
            <div>
              <label>Password</label>
              <input
                onChange={handlePassword}
                value={password}
                type="password"
              />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
