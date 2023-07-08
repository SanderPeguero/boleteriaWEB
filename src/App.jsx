import { useState } from 'react'
import './App.css'
import Form from './Form/Form'
import PullData from './Table/Main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/PullEvents' element={<PullData/>}></Route>
          <Route exact path='/CreateEvent' element={<Form/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
