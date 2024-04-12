import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Page/HomePage'
import PokemonDetailsPage from './Page/PokemonDetailsPage'
import PokemonByTypesPage from './Page/PokemonByTypesPage'
import RandomTeamPage from './Page/RandomTeamPage'
import SearchByNamePage from './Page/SearchByNamePage'
import PokemonResistanceByTypePage from './Page/PokemonResistanceByTypePage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/PokemonDetailsPage/:pokemonId' element={<PokemonDetailsPage />} />
          <Route path='/PokemonByTypesPage/:type' element={<PokemonByTypesPage />} />
          <Route path='/RandomTeamPage' element={<RandomTeamPage />} />
          <Route path='/SearchByNamePage' element={<SearchByNamePage />} />
          <Route path='/PokemonResistanceByTypePage/:typeResistance' element={<PokemonResistanceByTypePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
