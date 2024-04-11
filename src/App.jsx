import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Page/HomePage'
import PokemonDetailsPage from './Page/PokemonDetailsPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/PokemonDetailsPage/:pokemonId' element={<PokemonDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
