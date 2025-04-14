import { useState } from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Dashboard from './Dashboard.pages'
import AssessmentReview from './AssessmentReview'


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Dashboard/>} />
      <Route exact path="/assessmentreview" element={<AssessmentReview/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
