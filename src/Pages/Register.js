import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { handleRegist } from "../redux/actions/authAction"

const Register = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const { token } = useSelector((state) => state.authReducer)
  const dispatch = useDispatch()

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
    dispatch(handleRegist(payload))
  }

  return (
    <div>
      <div>
        <h1>Register</h1>
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
          <p>{token}</p>
        </div>
      </div>
    </div>
  )
}

export default Register
