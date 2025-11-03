import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import AddExpense from './pages/AddExpense'
import Pnf from './pages/Pnf'
import Header from './components/Header'
function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/addexp' element={<AddExpense />}></Route>
        <Route path='/*' element={<Pnf />}></Route>

      </Routes>
    </>
  )
}

export default App
