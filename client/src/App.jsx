import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ProductViewer from './components/ProductViewer.jsx'  
import Showcase from './components/Showcase.jsx'
import Performance from './components/Performance.jsx'
import Feature from './components/Feature.jsx'
import Highlights from './components/Highlights.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Feature />
      <Highlights />
    </div>
  )
}

export default App
