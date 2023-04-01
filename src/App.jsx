import { useState } from 'react'
import './App.css'
import { Navbar } from './modules/Navbar/Navbar'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Home } from './modules/Home/Home'
import { Galeria } from './modules/galeria/Galeria'
import { Episodios } from './modules/episodios/Episodios'

function App() {
  

  return (
    

    <BrowserRouter>
    
    
      
        <Navbar/>

      <Routes>

        <Route path='/' element={ <Home/> }></Route>
        <Route path='Galeria' element={ <Galeria/> }></Route>
        <Route path='Episodios' element={ <Episodios/> }></Route>


      </Routes>

    

 </BrowserRouter>


  )
}

export default App
