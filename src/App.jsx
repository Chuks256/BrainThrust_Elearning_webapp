import { useState } from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Dashboard from './Dashboard.pages'


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/dashboard" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
