import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Page/HomePage'
import PokemonDetailsPage from './Page/PokemonDetailsPage'
import PokemonByTypesPage from './Page/PokemonByTypesPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/PokemonDetailsPage/:pokemonId' element={<PokemonDetailsPage />} />
          <Route path='/PokemonByTypesPage/:type' element={<PokemonByTypesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
