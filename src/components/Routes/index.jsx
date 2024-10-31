import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Accomodation from '../../pages/Accomodation'
import About from '../../pages/About'
import Error from '../Error'
import Header from '../Header'
import Footer from '../Footer'

function RoutesKasa() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Accomodation" element={<Accomodation />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  )
}

export default RoutesKasa
