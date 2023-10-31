import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AllRouter } from './routes/Allrouter'
import {Header} from './components/Header'
import {Footer} from './components/Footer'

const App = () => {
  return (
    <div>
      
      <Header/>
      <AllRouter/>
      <Footer/>

    
     

    </div>
  )   
}

export default App
