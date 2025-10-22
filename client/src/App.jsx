import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ProductViewer from './components/ProductViewer.jsx'  
import Showcase from './components/Showcase.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
    </div>
  )
}

export default App
