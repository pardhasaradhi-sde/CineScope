import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'

import Home from './pages/Home'
import { MovieProvider } from './context/MovieContext.jsx'
import { Routes,Route } from 'react-router-dom'
import Favourites from './pages/Favourites'
import Navbar from './components/NavBar'

function App() {

  return (
    <MovieProvider>
      <Navbar/>
      <main className='main-content'>
      <Routes>
         <Route path="/"  element={<Home/>}/>
         <Route path="/favourites" element={<Favourites/>}/>
      </Routes>
    </main>
    </MovieProvider>


  )
}

export default App
