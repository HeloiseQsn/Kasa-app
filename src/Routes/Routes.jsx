import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Accomodation from '../pages/accomodation'
import About from '../pages/about'
import Error from '../pages/error'
import Header from '../components/Header'
import Footer from '../components/Footer'

function RoutesKasa() {
  return (
    <React.StrictMode>
      <Router>
        <Header activePage={true} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accomodation/:id" element={<Accomodation />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  )
}

export default RoutesKasa
