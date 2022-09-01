import React, { useState } from "react"

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleRegist = () => {}

  return (
    <div>
      <div>
        <h1>Register</h1>
        <div>
          <form>
            <div>
              <label>Email</label>
              <input type="text" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
