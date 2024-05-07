import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'

export default function App() 
{

  return (
    <>  
       <BrowserRouter>
        <Navbar/> 
        <Routes>
           <Route path='/' element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>  
          <Route path='/About' element={<About/>}/>
          <Route path='/Portfolio' element={<Portfolio/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/*' element={<Home/>}/>  
        </Routes>
      </BrowserRouter>  
    </>
  )
}
