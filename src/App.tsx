import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./component/Login"
import Dashboard from "./component/Dashboard"
import People from "./component/People"
import Starships from "./component/Starships"
import Logout from "./component/Logout"
import NopageFound from "./component/NopageFound"
import './App.css'

// Root application
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="people" element={<People />} />
          <Route path="starships" element={<Starships />} />
          <Route path="logout" element={<Logout />} />
          <Route path="*" element={<NopageFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
