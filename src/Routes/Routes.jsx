import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Accommodation from '../pages/accommodation'
import About from '../pages/about'
import Error from '../pages/error'
import Header from '../components/header'
import Footer from '../components/footer'

function RoutesKasa() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accommodation/:id" element={<Accommodation />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  )
}

export default RoutesKasa
