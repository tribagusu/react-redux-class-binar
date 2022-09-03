import "./App.css"
import Home from "./Pages/Home"
import { Routes, Route } from "react-router-dom"
import Register from "./Pages/Register"
import Login from "./Pages/Login"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="registration" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
