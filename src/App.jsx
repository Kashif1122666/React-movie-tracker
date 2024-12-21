import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Navbar from './Navbar'
import { Routes,Route} from 'react-router-dom'
import FavoriteList from './FavoriteList'
import Footer from './Footer'
import MoviesContextProvider from './MovieContext'



function App() {

 

  return (
    <MoviesContextProvider>
   <div className="min-h-screen flex flex-col">
  <Navbar/>
  
  <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoriteList" element={<FavoriteList />} />
        </Routes>
      </main>
    <Footer/>
    </div>
    
   


      
    </MoviesContextProvider>
  )
}

export default App
