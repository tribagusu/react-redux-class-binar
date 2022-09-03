import React, { Component } from "react"
import { useSelector, useDispatch, connect } from "react-redux"
import { useState, useEffect } from "react"
import { handleLogin } from "../redux/actions/authAction"

class Login extends Component {
  state = {
    email: "",
    password: "",
  }

  handleEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  handlePassword = (e) => {
    this.setState({ password: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      email: this.state.email,
      password: this.state.password,
    }
    this.props.handleLogin(payload)
  }

  render() {
    const { email, password } = this.state
    console.log(this.props.authReducer)

    return (
      <div>
        <div>
          <h1>Login</h1>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>Email</label>
                <input onChange={this.handleEmail} value={email} type="text" />
              </div>
              <div>
                <label>Password</label>
                <input
                  onChange={this.handlePassword}
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
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = {
  handleLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
// const Login = () => {
//   const [password, setPassword] = useState("")
//   const [email, setEmail] = useState("")

//   const { tokenLogin } = useSelector((state) => state.authReducer)
//   const dispatch = useDispatch()
//   console.log(tokenLogin)

//   const handleEmail = (e) => {
//     setEmail(e.target.value)
//   }

//   const handlePassword = (e) => {
//     setPassword(e.target.value)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const payload = {
//       email,
//       password,
//     }
//     dispatch(handleLogin(payload))
//   }
//   return (
//     <div>
//       <div>
//         <h1>Login</h1>
//         <div>
//           <form onSubmit={handleSubmit}>
//             <div>
//               <label>Email</label>
//               <input onChange={handleEmail} value={email} type="text" />
//             </div>
//             <div>
//               <label>Password</label>
//               <input
//                 onChange={handlePassword}
//                 value={password}
//                 type="password"
//               />
//             </div>
//             <button>Submit</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login
