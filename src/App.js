import "./App.css"
import Home from "./Pages/Home"
import { Routes, Route } from "react-router-dom"
import Register from "./Pages/Register"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="registration" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
